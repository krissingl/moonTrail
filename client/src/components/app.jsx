import React from 'react';
import TitleMenu from './titleMenu.jsx';
import classes from '../css/styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'start',
      landmark: 'Mare Crisium'
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  render () {
    let level;
    if (this.state.page === 'start') {
      level = (
        <div>
          <h1>Welcome to Moon Trail!</h1>
          <button className={classes.startBtn}>Start</button>
        </div>
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
