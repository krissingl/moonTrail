# Moon Trail — Roadmap

A staged plan to take Moon Trail from a playable skeleton to a completed, hosted
game. The order is deliberate: **make it a real game first**, then clean it up,
then polish and ship it to GitHub Pages.

Legend: `[ ]` todo · `[~]` in progress · `[x]` done

---

## Phase 1 — MVP: playable end to end

Goal: choices matter, you can genuinely win **or** lose, and you get a score.

- [x] **Single source of truth for game state.** The travel engine now runs off a
  `travelTick` reducer action; `statusScreen.jsx`'s ~10 mirrored `useState` hooks
  and the `tools/` timer files are gone. Supplies/distance/health live only in redux.
- [x] **Model supplies as a keyed collection.** Each `supplyList` entry has a `key`;
  `GetFinalSupplyObj` and the supply UI build from it generically. Adding a supply
  is a one-line data change.
- [x] **Apply event consequences.** `Event` dispatches `applyConsequence`; the
  reducer subtracts from the correct supply/health stat (or adds lost distance).
  Consequence data normalized to an explicit `{ target, amount }` schema.
- [x] **Trigger events during travel.** Each travel tick rolls for a random event;
  the manual `RANDOM_EVENT` button and the `traveling.jsx` skip button are removed.
- [x] **Real health + fail states.** Crew/rover health live on the status screen,
  drain via events, and crew health also drains each tick when a critical supply
  (oxygen/food/water) hits 0. Game over when crew or rover health reaches 0.
- [x] **Loss reason on the gameover screen.** Replaced `if (true)` with a real
  win/lose branch (crew perished / rover disabled / reached HERODOTUS).
- [x] **Win condition + scoring.** Reaching HERODOTUS wins with a score from
  surviving crew, leftover supplies, and remaining health; PLAY_AGAIN resets.
- [x] **Make strategy inputs count.** Rover `maxSpeed` sets distance covered per
  tick (faster = fewer ticks = less depletion, but smaller storage); supply weight
  is checked against rover capacity at selection.

> Balance note: depletion cadences, event chance, and tick rate are functional and
> playable (verified by simulating a full route) but not finely tuned — see Phase 3.

## Phase 1.5 — Oregon Trail gameplay (playtest-driven)

Goal: close the gap to a real Oregon Trail–style survival sim. Driven by playtest
findings. Sequenced by dependency: A is standalone; B is the keystone that C/D/E/F
build on; G is mostly independent.

### A — Quick fixes & responsive foundation ✅
- [x] Fix the event pipeline — bumped the per-tick event chance so events actually
  appear (finding #2).
- [x] Responsive layout foundation — viewport-relative sizing on the offending
  screens (#8).
- [x] Traveling screen: full-width dark backdrop so the white side-seams are gone
  (#4); status bar pinned to the bottom (#5).
- [x] Supplies menu: fixed the white box under the +/- buttons on hover (#3).
- [x] Map popups: fork map and Analyze-menu map now center and scale to fit (#6, #7).

### B — Crew as individuals (keystone) ✅
- [x] Replaced pooled `crewHealth` with 5 named members `{ name, health, status }`,
  built in the reducer from the entered names.
- [x] Rewired status screen (per-member display), `travelTick` strain (damages the
  weakest living member → staggered deaths), `applyConsequence`, and gameover.
- [x] Death semantics: members die one at a time at 0 health; game over only when
  all are gone or the rover is disabled. Resolves the 0-oxygen finding (#1).

### C — Events target the crew + afflictions ✅
- [x] Events strike a specific named member and apply a status (dysentery, fever,
  alien bite, broken leg, moon madness); the message names the member.
- [x] Untreated afflictions drain that member's health over time; deaths push a
  notification shown on a dedicated notice screen that pauses travel (#9, #10).

### D — Strategy actions become real (Analyze menu) ✅
- [x] STOP_TO_REST heals the crew and clears afflictions (costs time);
  ALTER_CREW_RATIONS (full/meager/bare-bones) slows food/water burn but risks
  illness; ALTER_ROVER_SPEED (cautious) trades speed for less rover wear (#11).

### E — Rover breakdown mechanics ✅
- [x] Tire blowout consumes a tire repair kit (or damages the rover); engine
  trouble consumes a maintenance kit (or damages it); cautious pace halves the
  no-kit damage (#12).

### F — Clothing protection tiers ✅
- [x] Aggregate coverage: if clothing items < living crew, the exposed strain the
  weakest member; events destroy clothing best-first (#16).

### G — Landmark content & mini-game ✅
- [x] SEARCH_FOR_RESOURCES alien-catching mini-game with random supply drops (#13).
- [x] Landmark trading via a strange vending machine — random give/receive (#15).
- [x] LOOK_AROUND aesthetic placeholder screen (#14).

Deferred (stay stubbed): CONTACT_GROUND_CONTROL, DEBUG_CACAL_DEVICE.

## Phase 1.6 — Readability & feedback (playtest-driven)

Goal: fix what the second playtest surfaced. Most findings collapsed into three
root causes rather than seventeen separate fixes.

### A — Correctness ✅
- [x] Supply display names — internal keys (`spaceSuit2`, `aiKit`, `clothes2`) were
  rendering raw. A single `supplyLabel` helper maps key → the human `type` already
  in `data.json`, used by the vending machine, crew supplies, and mini-game results.
- [x] Vending machine offer is stable per landmark — the offer lived in component
  `useState`, so leaving and re-entering rerolled it (declining was free). It now
  lives in redux as `landmarkOffer`, cleared only on `changeLandmark`.
- [x] Supply-select hover no longer cuts through the `+` button — percentage padding
  on `.supplyBtn` was overflowing the row; fixed sizing plus `align-items: center`.
- [x] Hold-to-repeat on the supply `+` / `-` buttons.

### B — Popup sizing ✅
- [x] Root cause of every "popup too narrow / must scroll horizontally" finding:
  `.popup` is `position: fixed` but `.noticePage` sets a `transform`, which makes it
  a containing block for fixed descendants — so popups were sized to the notice card,
  not the viewport. Popups now render through a React portal to `document.body`.
- [x] Unified popup shell with a centered title and close button (fixes the
  left-aligned `ROUTE_MAP` header at the fork).
- [x] Crew supplies popup redesigned as a two-column grid with readable labels.
- [x] Analyze menu, ration, and pace options given spacing, borders, and hit area.

### C — Feedback ✅
- [x] Mini-game shows a live catch count and a floating `+1 <SUPPLY>` on each hit;
  the results screen reports aliens caught alongside the drops.
- [x] Mini-game returns to the landmark when entered from a landmark (it previously
  always dumped the player into the traveling screen).
- [x] Vending machine lists current inventory before you decide.
- [x] Win screen lists each survivor with status and health; `CONGRATULATIONS!` and
  `YOU_ARE_ENROUTE_HOME` on separate lines.

Deferred to Phase 3: mission-briefing typing animation, dark mode (wants to land
after the Phase 2 CSS cleanup rather than being done twice).

## Phase 2 — Cleanup & refactor

Goal: pay down first-project debt so the codebase is easy to keep building on.

- [ ] **Separate source from build output.** Move `data.json` out of
  `client/dist/` into `client/src/data/`; update imports.
- [ ] **Stop committing build artifacts.** Add a proper build step and gitignore
  `client/dist/` (the committed `bundle.js` and `dist/` currently live in the repo).
- [ ] **Fix the dev/run scripts** so the README's "clone and run" actually works
  (the `start` script is malformed and references a missing `react-scripts` dep).
- [ ] **Remove dead code & noise** — stray `console.log`s, commented-out props,
  and user-facing typos ("CRATOR", "metorShower", "moral").
- [ ] **Reduce boilerplate.** Consolidate the repeated `mapDispatchToProps` /
  dispatch wiring; consider replacing the string-based page switch in `App` with
  a small state machine.
- [ ] **Flesh out landmark actions** (`LOOK_AROUND`, `CONTACT_GROUND_CONTROL`,
  `DEBUG_CACAL_DEVICE`) so stops are meaningful instead of placeholder alerts.

## Phase 3 — Polish

- [ ] **Mission-briefing typing animation** for the intro block.
- [ ] **Dark mode** — needs a theme pass over `styles.css` (the global
  `div { background-color: white }` rule has to go first).
- [ ] **Score persistence** via localStorage; optional local high-score list.
- [ ] **Meaningful travel stops** — rest, ration adjustment, search-for-resources
  actually affect stats.
- [ ] **Smoke tests** around the reducer and depletion logic; fix `npm test` so it
  runs instead of erroring.

## Phase 4 — Host on GitHub Pages (free)

Goal: ship the game as a static site. It's a static React app — the Express
server only serves files and isn't needed for hosting. Built output is ~3.4 MB,
far under Pages' limits.

- [ ] **Add a production build** (minified) as a dedicated npm script.
- [ ] **Set the webpack `output.publicPath` / asset base path** for the
  `/moonTrail/` Pages subpath so JS, CSS, and images resolve correctly.
- [ ] **Verify the app runs with no server** — confirm `data.json` is bundled at
  build time (no runtime fetch / backend dependency).
- [ ] **Publish the build to GitHub Pages** — e.g. a `gh-pages` branch or a
  GitHub Actions workflow that builds and deploys `client/dist` on push to
  `master`.
- [ ] **Update the README** with the live Pages URL and play instructions.
- [ ] *(Optional)* Trim large binary assets from git history if clone size
  becomes a concern (`.git` is ~36 MB).

---

### Suggested starting point

Phase 1: **wire up event consequences and real health into the store** — it's the
change that most immediately makes Moon Trail feel like a game.
