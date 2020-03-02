import Dataset from '@/core/models/Dataset';
import Trainer from '@/core/services/interfaces/Trainer';

export default (config: Dataset, model: Trainer) => {
  // eslint-disable-next-line
  const datasetProcessed: [] = require(`../../dataset/${config.processed}`);

  model.restore(datasetProcessed);
};
