import Dataset from '@/core/models/Dataset';
import DividerResult from '@/core/models/DividerResult';

export default (config: Dataset, trainProportion = 70): DividerResult => {
  // eslint-disable-next-line
  const dataset: [] = require(`../../dataset/${config.source}`);

  let randomIndex: number;
  const result = new DividerResult();
  const indexAdded: number[] = [];
  const trainProportionLength = dataset.length * (trainProportion / 100);

  while (result.train.length < trainProportionLength) {
    randomIndex = Math.floor(Math.random() * dataset.length);

    if (!indexAdded.includes(randomIndex)) {
      indexAdded.push(randomIndex);
      result.train.push(dataset[randomIndex]);
    }
  }

  result.test = dataset.filter((_, i) => !indexAdded.includes(i)) as [];
  return result;
};
