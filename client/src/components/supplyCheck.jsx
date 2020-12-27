import React from 'react';
import { connect } from 'react-redux';
import classes from '../css/styles.css';

const SupplyCheck = ({ supplyObj }) => {
  const supplyTypes = Object.keys(supplyObj);
  const currentSupplies = supplyTypes.map((supply) => (
    <div key={supply} className={classes.reviewItem}>
      <div>{supply}</div>
      <div>{`how-many: ${supplyObj[supply].amount}`}</div>
    </div>
  ));
  return (
    <div>{currentSupplies}</div>
  );
};

const mapStateToProps = (state) => ({ supplyObj: state.supplyObj });

export default connect(mapStateToProps)(SupplyCheck);
