import React from 'react';
import TitleMenu from './titleMenu.jsx';
import Main from './main.jsx';
import Intro from './intro.jsx';
import NameAstros from './nameAstro.jsx';
import ChooseRover from './chooseRover.jsx';
import ChooseSupplies from './chooseSupplies.jsx';
import SupplyAdvice from './supplyAdvice.jsx';
import ChoiceReview from './choiceReview.jsx';
import Landmark from './landmark.jsx';
import Traveling from './traveling.jsx';
import Fork from './fork.jsx';
import StatusScreen from './statusScreen.jsx';
import Analyzation from './analyzeSituation.jsx';
import Gameover from './gameover.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'main',
      crew: [],
      rover: 'rover',
      supplyList: [],
      currentLandmark: 'MARE_CRISIUM',
      currentlyTraveling: false,
    };
    this.changePage = this.changePage.bind(this);
    this.changeCrew = this.changeCrew.bind(this);
    this.changeRover = this.changeRover.bind(this);
    this.changeFinalSupplies = this.changeFinalSupplies.bind(this);
    this.changeLandmark = this.changeLandmark.bind(this);
    this.changeTravelingStatus = this.changeTravelingStatus.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  changeCrew(e, crewList) {
    e.preventDefault();
    this.setState({ crew: crewList });
  }

  changeRover(e, roverObj) {
    e.preventDefault();
    this.setState({ rover: roverObj });
  }

  changeFinalSupplies(e, finalSupplies) {
    e.preventDefault();
    this.setState({ supplyList: finalSupplies });
  }

  changeLandmark(e, newLandmark) {
    e.preventDefault();
    this.setState({ currentLandmark: newLandmark });
  }

  changeTravelingStatus(e, newStatus) {
    e.preventDefault();
    this.setState({ currentlyTraveling: newStatus });
  }

  render() {
    let level;
    if (this.state.page === 'main') {
      level = (
        <Main changePage={this.changePage} />
      );
    } else if (this.state.page === 'intro') {
      level = (
        <Intro changePage={this.changePage} />
      );
    } else if (this.state.page === 'naming') {
      level = (
        <NameAstros changePage={this.changePage} changeCrew={this.changeCrew} />
      );
    } else if (this.state.page === 'rover') {
      level = (
        <ChooseRover changePage={this.changePage} changeRover={this.changeRover} />
      );
    } else if (this.state.page === 'supplies') {
      level = (
        <ChooseSupplies
          maxStorage={this.state.rover.storageCapacity}
          changePage={this.changePage}
          changeFinalSupplies={this.changeFinalSupplies}
        />
      );
    } else if (this.state.page === 'landmark') {
      level = (
        <div>
          <Landmark
            changePage={this.changePage}
            landmark={this.state.currentLandmark}
            changeLandmark={this.changeLandmark}
            changeTravelingStatus={this.changeTravelingStatus}
          />
          <StatusScreen
            changePage={this.changePage}
            crew={this.state.crew}
            rover={this.state.rover}
            supplyList={this.state.supplyList}
            landmark={this.state.currentLandmark}
            travelingStatus={this.state.currentlyTraveling}
          />
        </div>
      );
    } else if (this.state.page === 'analyzeSitch') {
      level = (
        <Analyzation changePage={this.changePage} travelingStatus={this.state.currentlyTraveling} />
      );
    } else if (this.state.page === 'traveling') {
      level = (
        <div>
          <Traveling
            changePage={this.changePage}
            landmark={this.state.currentLandmark}
            changeLandmark={this.changeLandmark}
            changeTravelingStatus={this.changeTravelingStatus}
          />
          <StatusScreen
            changePage={this.changePage}
            crew={this.state.crew}
            rover={this.state.rover}
            supplyList={this.state.supplyList}
            landmark={this.state.currentLandmark}
            travelingStatus={this.state.currentlyTraveling}
          />
        </div>
      );
    } else if (this.state.page === 'review') {
      level = (
        <ChoiceReview
          changePage={this.changePage}
          crew={this.state.crew}
          rover={this.state.rover}
          supplyList={this.state.supplyList}
        />
      );
    } else if (this.state.page === 'supplyAdvice') {
      level = (
        <SupplyAdvice changePage={this.changePage} />
      );
    } else if (this.state.page === 'fork') {
      level = (
        <Fork
          changePage={this.changePage}
          landmark={this.state.currentLandmark}
          changeLandmark={this.changeLandmark}
          changeTravelingStatus={this.changeTravelingStatus}
        />
      );
    } else if (this.state.page === 'gameover') {
      level = (
        <Gameover />
      );
    }
    return (
      <div>
        <TitleMenu changePage={this.changePage} />
        <div>
          {level}
        </div>
      </div>
    );
  }
}

export default App;
