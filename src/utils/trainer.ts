import Trainer from '@/core/services/interfaces/Trainer';
import Dataset from '@/core/models/Dataset';

export default ({
  model, dataset, config,
}: { model: Trainer; dataset: []; config: Dataset }): void => {
  dataset.forEach((data) => {
    model.train(data[config.value], data[config.key]);
  });
};
