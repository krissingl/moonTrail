import data from '../../dist/data.json';

const LABELS = data.supplyList.reduce((labels, supply) => ({
  ...labels,
  [supply.key]: supply.type,
}), {});

const supplyLabel = (key) => LABELS[key] || key;

export default supplyLabel;
