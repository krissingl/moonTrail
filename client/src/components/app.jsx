import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'home'
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  render () {
    let level;
    return (
      <div>
        Ollo?
      </div>
    )
  }
}

export default App;
