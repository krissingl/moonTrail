import React from 'react';
import { connect } from 'react-redux';
import supplyLabel from './supplyLabel.jsx';
import classes from '../css/styles.css';

const CATEGORIES = [
  { title: 'CONSUMABLES', keys: ['oxygen', 'food', 'water'] },
  { title: 'CLOTHING', keys: ['clothes', 'clothes2', 'spaceSuit', 'spaceSuit2'] },
  { title: 'EQUIPMENT', keys: ['aiKit', 'tirePatch', 'roverKit'] },
];

const SupplyCheck = ({ supplyObj }) => {
  const categorized = CATEGORIES.reduce((keys, category) => keys.concat(category.keys), []);
  const uncategorized = Object.keys(supplyObj).filter((key) => !categorized.includes(key));
  const columns = uncategorized.length
    ? CATEGORIES.concat({ title: 'OTHER', keys: uncategorized })
    : CATEGORIES;

  return (
    <div className={classes.supplyCheckGrid}>
      {columns.map((category) => (
        <div key={category.title} className={classes.supplyCheckColumn}>
          <div className={classes.supplyCheckHeading}>{category.title}</div>
          {category.keys
            .filter((key) => supplyObj[key])
            .map((key) => (
              <div key={key} className={classes.supplyCheckRow}>
                <span className={classes.supplyCheckName}>{supplyLabel(key)}</span>
                <span className={classes.supplyCheckAmount}>{supplyObj[key].amount}</span>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ supplyObj: state.supplyObj });

export default connect(mapStateToProps)(SupplyCheck);
