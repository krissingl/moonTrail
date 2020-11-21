import React from 'react';
import TitleMenu from './titleMenu.jsx';
import Main from './main.jsx';
import Intro from './intro.jsx';
import NameAstros from './nameAstro.jsx';
import ChooseRover from './chooseRover.jsx';
import ChooseSupplies from './chooseSupplies.jsx';
import classes from '../css/styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'main',
      landmark: 'Mare Crisium',
      speed: '',
      crew: [],
      supplies: []
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  render () {
    let level;
    if (this.state.page === 'main') {
      level = (
        <Main changePage={this.changePage} />
      )
    } else if (this.state.page === 'intro') {
      level = (
        <Intro changePage={this.changePage} />
      )
    } else if (this.state.page === 'naming') {
      level = (
        <NameAstros changePage={this.changePage} />
      )
    } else if (this.state.page === 'rover') {
      level = (
        <ChooseRover changePage={this.changePage} />
      )
    } else if (this.state.page === 'supplies') {
      level = (
        <ChooseSupplies changePage={this.changePage} />
      )
    }
    return (
      <div>
        <TitleMenu changePage={this.changePage} />
        <div>
          {level}
        </div>
      </div>
    )
  }
}

export default App;
