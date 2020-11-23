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
    this.setState({ rover: newRover });
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
        <ChooseSupplies changePage={this.changePage} />
      );
    } else if (this.state.page === 'landmark') {
      level = (
        <div>
          <Landmark changePage={this.changePage} />
          <StatusScreen rover={this.state.rover} crew={this.state.crew} />
        </div>
      );
    } else if (this.state.page === 'traveling') {
      level = (
        <div>
          <Traveling changePage={this.changePage} />
          <StatusScreen crew={this.state.crew} />
        </div>
      );
    }
    console.log(this.state.crew);
    console.log(this.state.rover);
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
