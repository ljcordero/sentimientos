import Trainer from '@/core/services/interfaces/Trainer';
import Dataset from '@/core/models/Dataset';

// milliseconds to train the next element on the dataset
const MILLISECONDS_TIMEOUT = 10;

// Parallel executor in order to train the elements of the dataset
// this will timeout to avoid block the UI
export default ({
  model, dataset, config,
}: { model: Trainer; dataset: []; config: Dataset }):
Promise<void[]> => Promise.all(dataset.map((data, index) => new Promise<void>((succ) => {
  setTimeout(() => {
    model.train(data[config.value], data[config.key]);
    succ();
  }, MILLISECONDS_TIMEOUT * index);
})));
