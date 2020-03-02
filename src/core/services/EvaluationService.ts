import datasetTrainer from '@/utils/trainer';
import datasetDivider from '@/utils/divider';
import datasetProcessedRestorer from '@/utils/restorer';
import Evaluation from '../models/Evaluation';
import EvaluationResult from '../models/EvaluationResult';
import Trainer from './interfaces/Trainer';
import Dataset from '../models/Dataset';
import DividerResult from '../models/DividerResult';

export default class EvaluationService {
  private evaluations: Evaluation[];

  constructor(evaluations: Evaluation[]) {
    this.evaluations = evaluations;
  }

  private getTrainerModels(): Trainer[] {
    const models: Trainer[] = [];

    this.evaluations.forEach((evaluation) => {
      const model = evaluation.classifier;
      if ('train' in model) {
        models.push(model);
      }
    });

    return models;
  }

  public trainFromValue(text: string, label: string): void {
    this.getTrainerModels().forEach((model) => model.train(text, label));
  }

  public async trainFromConfig(config: Dataset): Promise<void> {
    if (config.processed) {
      return this.trainFromProcessed(config);
    }
    const dataset = datasetDivider(config, 100);
    return this.trainFromDataset(config, dataset);
  }

  public async trainFromDataset(config: Dataset, dataset: DividerResult): Promise<void> {
    await Promise.all(this.getTrainerModels().map((model) => datasetTrainer({
      model,
      dataset: dataset.train,
      config,
    })));
  }

  public async trainFromProcessed(config: Dataset): Promise<void> {
    await Promise.all(
      this.getTrainerModels().map((model) => datasetProcessedRestorer(config, model)),
    );
  }

  public evaluate(text: string): EvaluationResult[] {
    return this.evaluations.map<EvaluationResult>((evaluation) => new EvaluationResult({
      evaluation,
      result: evaluation.classifier.classify(text),
    }));
  }
}
