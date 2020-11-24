import React from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

class ChooseSupplies extends React.Component {
  constructor({ changePage }) {
    super({ changePage });
    this.state = {
      oxy: {
        amount: 0,
        totalWeight: 0,
      },
    };
  }

  render() {
    console.log(this.state.oxy);
    const supplyList = data.supplyList.map((supply) => (
      <div className={classes.supplyList}>
        <label>
          {supply.type}
          :
        </label>
        <input type="text" className={classes.supplyInput} weight={supply.weight} />
      </div>
    ));
    return (
      <div>
        <h3>This is the Supply Choosing Page</h3>
        <button type="button">What should I take?</button>
        <div>
          <form onSubmit={() => { this.changePage('landmark'); }}>
            {supplyList}
            <input type="submit" value="Begin Journey" />
          </form>
        </div>
      </div>
    );
  }
}

export default ChooseSupplies;
