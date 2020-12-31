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
    };
    this.changePage = this.changePage.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  resetGame() {
    this.setState({ currentLandmark: 'MARE_CRISIUM' });
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
        <NameAstros changePage={this.changePage} />
      );
    } else if (this.state.page === 'rover') {
      level = (
        <ChooseRover changePage={this.changePage} />
      );
    } else if (this.state.page === 'supplies') {
      level = (
        <ChooseSupplies changePage={this.changePage} />
      );
    } else if (this.state.page === 'landmark') {
      level = (
        <div>
          <Landmark changePage={this.changePage} />
        </div>
      );
    } else if (this.state.page === 'analyzeSitch') {
      level = (
        <Analyzation
          changePage={this.changePage}
        />
      );
    } else if (this.state.page === 'traveling') {
      level = (
        <div>
          <Traveling
            changePage={this.changePage}
          />
          <StatusScreen
            changePage={this.changePage}
            landmark={this.state.currentLandmark}
            previousLandmark={this.state.previousLandmark}
          />
        </div>
      );
    } else if (this.state.page === 'review') {
      level = (
        <ChoiceReview
          changePage={this.changePage}
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
          changePreviousLandmark={this.changePreviousLandmark}
        />
      );
    } else if (this.state.page === 'gameover') {
      level = (
        <Gameover />
      );
    }
    return (
      <div>
        <TitleMenu changePage={this.changePage} reset={this.resetGame} />
        <div>
          {level}
        </div>
      </div>
    );
  }
}

export default App;
