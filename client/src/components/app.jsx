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
      landmark: 'Mare Crisium'
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
        <Main />
      )
    } else if (this.state.page === 'intro') {
      level = (
        <Intro />
      )
    } else if (this.state.page === 'naming') {
      level = (
        <NameAstros />
      )
    } else if (this.state.page === 'rover') {
      level = (
        <ChooseRover />
      )
    } else if (this.state.page === 'supplies') {
      level = (
        <ChooseSupplies />
      )
    }
    return (
      <div>
        <TitleMenu />
        <div>
          {level}
        </div>
      </div>
    )
  }
}

export default App;
