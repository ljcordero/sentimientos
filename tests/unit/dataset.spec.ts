import datasetDivider from '@/utils/divider';
import Dataset, { TweetTASS } from '@/core/models/Dataset';
import NaiveBayesService from '@/core/services/NaiveBayesService';
import Trainer from '@/core/services/interfaces/Trainer';
import Classifier from '@/core/services/interfaces/Classifier';
import AfinnService from '@/core/services/AfinnService';

const datasets: Dataset[] = [
  TweetTASS,
];

function getModels(): (Trainer & Classifier)[] {
  return [
    new NaiveBayesService(),
  ];
}

const DATASET_TRAIN_PROPORTION = 70;

describe('datasets validations', () => {
  it('models accuracy', () => {
    datasets.forEach((config) => {
      const dataset = datasetDivider(config, DATASET_TRAIN_PROPORTION);

      console.log(`Dataset: ${config.source}`);

      getModels().forEach((model) => {
        console.log(`Model: ${model.constructor.name}`);

        const validationResult = {
          success: 0,
          total: 0,
        };

        // eslint-disable-next-line
        const confusionMatrix: any = {};

        dataset.train.forEach((data) => {
          model.train(data[config.value], data[config.key]);
        });

        dataset.test.forEach((data) => {
          const result = model.classify(data[config.value]);

          if (!confusionMatrix[result]) {
            confusionMatrix[result] = {
              [data[config.key]]: 0,
            };
          } else if (!confusionMatrix[result][data[config.key]]) {
            confusionMatrix[result][data[config.key]] = 0;
          }

          confusionMatrix[result][data[config.key]] += 1;

          validationResult.total += 1;

          if (result === data[config.key]) {
            validationResult.success += 1;
          }
        });

        console.log(`Accuracy: ${(validationResult.success / validationResult.total) * 100}`);
        console.log('Confusion Matrix:');
        console.log(confusionMatrix);
      });
    });
  }).timeout(Number.MAX_VALUE);

  it('afinn accuracy', () => {
    datasets.forEach((config) => {
      const dataset = datasetDivider(config, DATASET_TRAIN_PROPORTION);

      console.log(`Dataset: ${config.source}`);

      const model = new AfinnService();

      const validationResult = {
        success: 0,
        total: 0,
      };

      dataset.train.forEach((data) => {
        const result = model.classify(data[config.value]);

        validationResult.total += 1;

        if (result === data[config.key]) {
          validationResult.success += 1;
        }
      });

      console.log(`Accuracy: ${(validationResult.success / validationResult.total) * 100}`);
    });
  }).timeout(Number.MAX_VALUE);
});
