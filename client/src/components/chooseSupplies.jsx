import React from 'react';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

const ChooseSupplies = ({ changePage }) => {
  console.log(data.supplyList);
  return (
    <div className={classes.supplyPage}>
      <h3>This is the Supply Choosing Page</h3>
      <button type="button">What should we take?</button>
      <div>Ollo</div>
      <button type="button" onClick={() => { changePage('landmark'); }}>Begin journey</button>
    </div>
  );
};

export default ChooseSupplies;

/*  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return [value, handleChange];
  };
        <form onSubmit={() => { changePage('landmark'); }}>
          {supplyList}
          <input type="submit" value="Begin Journey" />
        </form>
const [listedSupply, handleSupplyChange] = useInput('');
  const handleSupplyInputChange = (e) => {
    handleSupplyChange(e.target.value);
    console.log(listedSupply);
  };
 const supplyList = data.supplyList.map((supply) => (
    <div className={classes.supplyList}>
      <label>
        {supply.type}
        :
      </label>
      <input type="text" className={classes.supplyInput} weight={supply.weight} value={0} onChange={handleSupplyInputChange} />
    </div>
  ));
*/