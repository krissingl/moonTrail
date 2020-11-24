import React from 'react';
import TitleMenu from './titleMenu.jsx';
import Main from './main.jsx';
import Intro from './intro.jsx';
import NameAstros from './nameAstro.jsx';
import ChooseRover from './chooseRover.jsx';
import ChooseSupplies from './chooseSupplies.jsx';
import Landmark from './landmark.jsx';
import Traveling from './traveling.jsx';
import StatusScreen from './statusScreen.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'main',
      crew: [],
      rover: 'rover',
      supplyList: [],
    };
    this.changePage = this.changePage.bind(this);
    this.changeCrew = this.changeCrew.bind(this);
    this.changeRover = this.changeRover.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  changeCrew(e, crewList) {
    e.preventDefault();
    this.setState({ crew: crewList });
  }

  changeRover(e, newRover) {
    e.preventDefault();
    console.log(newRover);
    this.setState({ rover: newRover });
  }

  changefinalSupplies(e, finalSupplies) {
    e.preventDefault();
    this.setState({ supplyList: finalSupplies });
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
          changePage={this.changePage}
          changefinalSupplies={this.changefinalSupplies}
        />
      );
    } else if (this.state.page === 'landmark') {
      level = (
        <div>
          <Landmark changePage={this.changePage} />
          <StatusScreen crew={this.state.crew} />
        </div>
      );
    } else if (this.state.page === 'traveling') {
      level = (
        <div>
          <Traveling changePage={this.changePage} />
          <StatusScreen
            crew={this.state.crew}
            rover={this.state.rover}
            supplyList={this.state.supplyList}
          />
        </div>
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
