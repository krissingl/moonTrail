import React from 'react';
import classes from '../css/styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'start'
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
          <button>Start</button>
          <button>ScoreBoard</button>
        </div>
      )
    }
    return (
      <div>
        {level}
      </div>
    )
  }
}

export default App;
