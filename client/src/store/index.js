import { createStore } from 'redux';

const initialState = {
  crew: [],
  rover: {},
  supplyObj: {},
  supplyList: [],
  savedDistance: null,
  travelTicks: 0,
  currentlyTraveling: false,
  previousLandmark: 'spaceLOL',
  landmark: 'MARE_CRISIUM',
  roverHealth: 10,
  rationLevel: 'full',
  roverPace: 'normal',
  notifications: [],
  landmarkOffer: null,
  eventlessTicks: 0,
};

const CREW_START_HEALTH = 20;
const CRITICAL_SUPPLIES = ['oxygen', 'food', 'water'];
const DEPLETION_CADENCE = { oxygen: 2, food: 4, water: 4 };
const CREW_SCALED_SUPPLIES = ['food', 'water'];
const CREW_PER_UNIT_DRAWN = 2;
const RATION_FACTOR = { full: 1, meager: 2, bareBones: 3 };
const RATION_SICKNESS = { full: 0, meager: 0.01, bareBones: 0.03 };
const CLOTHING_BY_QUALITY = ['spaceSuit2', 'clothes2', 'spaceSuit', 'clothes'];
const AFFLICTION_CADENCE = 3;
const EXPOSURE_CADENCE = 3;
const REST_HEAL = 4;
const REST_CEILING = 15;
const REST_TIME_COST = 5;

const roverStep = (rover) => Math.max(1, Math.round((rover.maxSpeed || 5) / 4));

const buildCrew = (names) => names.map((name) => ({
  name,
  health: CREW_START_HEALTH,
  status: 'healthy',
}));

const livingIndexes = (crew) => crew
  .map((member, index) => (member.health > 0 ? index : -1))
  .filter((index) => index !== -1);

const damageMember = (crew, index, amount) => crew.map((member, i) => (
  i === index ? { ...member, health: Math.max(0, member.health - amount) } : member
));

const damageWeakest = (crew, amount) => {
  const living = livingIndexes(crew);
  if (!living.length) {
    return crew;
  }
  const weakest = living.reduce((a, b) => (crew[b].health < crew[a].health ? b : a));
  return damageMember(crew, weakest, amount);
};

const damageAll = (crew, amount) => crew.map((member) => (
  member.health > 0 ? { ...member, health: Math.max(0, member.health - amount) } : member
));

const damageRandom = (crew, amount) => {
  const living = livingIndexes(crew);
  if (!living.length) {
    return crew;
  }
  const index = living[Math.floor(Math.random() * living.length)];
  return damageMember(crew, index, amount);
};

const clothingCount = (supplyObj) => CLOTHING_BY_QUALITY
  .reduce((total, key) => total + (supplyObj[key] ? supplyObj[key].amount : 0), 0);

const reduceClothing = (supplyObj, amount) => {
  const next = { ...supplyObj };
  let remaining = amount;
  CLOTHING_BY_QUALITY.forEach((key) => {
    if (remaining <= 0 || !next[key] || next[key].amount <= 0) {
      return;
    }
    const taken = Math.min(remaining, next[key].amount);
    next[key] = { ...next[key], amount: next[key].amount - taken };
    remaining -= taken;
  });
  return next;
};

const noteDeaths = (prevCrew, state) => {
  const messages = state.crew
    .filter((member, i) => prevCrew[i] && prevCrew[i].health > 0 && member.health <= 0)
    .map((member) => `${member.name} HAS PERISHED.`);
  if (!messages.length) {
    return state;
  }
  return { ...state, notifications: [...state.notifications, ...messages] };
};

const resolveEvent = (state, { effect, memberIndex }) => {
  if (effect.kind === 'affliction') {
    if (memberIndex === null || memberIndex === undefined) {
      return state;
    }
    return {
      ...state,
      crew: state.crew.map((member, i) => (
        i === memberIndex ? { ...member, status: effect.status } : member
      )),
    };
  }
  if (effect.kind === 'crewDamage') {
    const crew = memberIndex === null || memberIndex === undefined
      ? damageRandom(state.crew, effect.amount)
      : damageMember(state.crew, memberIndex, effect.amount);
    return noteDeaths(state.crew, { ...state, crew });
  }
  if (effect.kind === 'supply') {
    const supply = state.supplyObj[effect.target];
    if (!supply) {
      return state;
    }
    return {
      ...state,
      supplyObj: {
        ...state.supplyObj,
        [effect.target]: { ...supply, amount: Math.max(0, supply.amount - effect.amount) },
      },
    };
  }
  if (effect.kind === 'distance') {
    return { ...state, savedDistance: (state.savedDistance || 0) + effect.amount };
  }
  if (effect.kind === 'roverDamage') {
    return { ...state, roverHealth: Math.max(0, state.roverHealth - effect.amount) };
  }
  if (effect.kind === 'roverBreakdown') {
    const kit = state.supplyObj[effect.requires];
    if (kit && kit.amount > 0) {
      return {
        ...state,
        supplyObj: {
          ...state.supplyObj,
          [effect.requires]: { ...kit, amount: kit.amount - 1 },
        },
      };
    }
    const damage = state.roverPace === 'cautious' ? Math.ceil(effect.amount / 2) : effect.amount;
    return { ...state, roverHealth: Math.max(0, state.roverHealth - damage) };
  }
  if (effect.kind === 'clothingLoss') {
    return { ...state, supplyObj: reduceClothing(state.supplyObj, effect.amount) };
  }
  return state;
};

const travelTick = (state) => {
  const ticks = state.travelTicks + 1;
  const baseStep = roverStep(state.rover);
  const step = state.roverPace === 'cautious' ? Math.max(1, Math.round(baseStep / 2)) : baseStep;
  const savedDistance = Math.max(0, (state.savedDistance || 0) - step);

  const rationFactor = RATION_FACTOR[state.rationLevel] || 1;
  const livingAtTickStart = livingIndexes(state.crew).length;
  const crewDraw = Math.max(1, Math.ceil(livingAtTickStart / CREW_PER_UNIT_DRAWN));
  const supplyObj = { ...state.supplyObj };
  Object.keys(DEPLETION_CADENCE).forEach((key) => {
    const supply = supplyObj[key];
    const cadence = (key === 'oxygen') ? DEPLETION_CADENCE[key] : DEPLETION_CADENCE[key] * rationFactor;
    const draw = CREW_SCALED_SUPPLIES.includes(key) ? crewDraw : 1;
    if (supply && supply.amount > 0 && ticks % cadence === 0) {
      supplyObj[key] = { ...supply, amount: Math.max(0, supply.amount - draw) };
    }
  });

  let { crew } = state;

  const depleted = CRITICAL_SUPPLIES.some((key) => !supplyObj[key] || supplyObj[key].amount <= 0);
  if (depleted) {
    crew = damageAll(crew, 1);
  }

  if (ticks % AFFLICTION_CADENCE === 0) {
    crew = crew.map((member) => (
      member.health > 0 && member.status !== 'healthy'
        ? { ...member, health: Math.max(0, member.health - 1) }
        : member
    ));
  }

  const livingCount = livingIndexes(crew).length;
  const exposed = livingCount - Math.min(livingCount, clothingCount(supplyObj));
  if (exposed > 0 && ticks % EXPOSURE_CADENCE === 0) {
    crew = damageWeakest(crew, 1);
  }

  if (Math.random() < (RATION_SICKNESS[state.rationLevel] || 0)) {
    crew = damageRandom(crew, 1);
  }

  return noteDeaths(state.crew, {
    ...state,
    savedDistance,
    travelTicks: ticks,
    eventlessTicks: state.eventlessTicks + 1,
    supplyObj,
    crew,
  });
};

const restHealth = (health) => Math.max(health, Math.min(REST_CEILING, health + REST_HEAL));

const restCrew = (state) => ({
  ...state,
  crew: state.crew.map((member) => (
    member.health > 0
      ? { ...member, health: restHealth(member.health), status: 'healthy' }
      : member
  )),
  savedDistance: (state.savedDistance || 0) + REST_TIME_COST,
});

const addSupplies = (state, drops) => {
  const supplyObj = { ...state.supplyObj };
  Object.keys(drops).forEach((key) => {
    if (supplyObj[key]) {
      supplyObj[key] = { ...supplyObj[key], amount: supplyObj[key].amount + drops[key] };
    }
  });
  return { ...state, supplyObj };
};

const tradeSupplies = (state, { give, receive }) => {
  const giveSupply = state.supplyObj[give.key];
  const receiveSupply = state.supplyObj[receive.key];
  if (!giveSupply || !receiveSupply || giveSupply.amount < give.amount) {
    return state;
  }
  return {
    ...state,
    supplyObj: {
      ...state.supplyObj,
      [give.key]: { ...giveSupply, amount: giveSupply.amount - give.amount },
      [receive.key]: { ...receiveSupply, amount: receiveSupply.amount + receive.amount },
    },
    landmarkOffer: state.landmarkOffer ? { ...state.landmarkOffer, traded: true } : null,
  };
};

const reducer = (state = initialState, action) => {
  if (action.type === 'changeCrew') {
    return { ...state, crew: buildCrew(action.payload) };
  } if (action.type === 'changeRover') {
    return { ...state, rover: action.payload };
  } if (action.type === 'supplyObjChange') {
    return { ...state, supplyObj: action.payload };
  } if (action.type === 'changeSupplyList') {
    return { ...state, supplyList: action.payload };
  } if (action.type === 'landmarkDistanceChange') {
    return { ...state, savedDistance: action.payload };
  } if (action.type === 'changeTravelingStatus') {
    return { ...state, currentlyTraveling: action.payload };
  } if (action.type === 'changePrevLandmark') {
    return { ...state, previousLandmark: action.payload };
  } if (action.type === 'changeLandmark') {
    return { ...state, landmark: action.payload, landmarkOffer: null };
  } if (action.type === 'setLandmarkOffer') {
    return { ...state, landmarkOffer: action.payload };
  } if (action.type === 'resolveEvent') {
    return { ...resolveEvent(state, action.payload), eventlessTicks: 0 };
  } if (action.type === 'travelTick') {
    return travelTick(state);
  } if (action.type === 'restCrew') {
    return restCrew(state);
  } if (action.type === 'setRationLevel') {
    return { ...state, rationLevel: action.payload };
  } if (action.type === 'setRoverPace') {
    return { ...state, roverPace: action.payload };
  } if (action.type === 'addSupplies') {
    return addSupplies(state, action.payload);
  } if (action.type === 'tradeSupplies') {
    return tradeSupplies(state, action.payload);
  } if (action.type === 'dismissNotifications') {
    return { ...state, notifications: [] };
  } if (action.type === 'reset') {
    return { ...initialState };
  }
  return state;
};

const store = createStore(reducer);

export default store;
