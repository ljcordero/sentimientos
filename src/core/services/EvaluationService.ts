import datasetTrainer from '@/utils/trainer';
import datasetDivider from '@/utils/divider';
import Evaluation from '../models/Evaluation';
import EvaluationResult from '../models/EvaluationResult';
import Trainer from './interfaces/Trainer';
import Dataset from '../models/Dataset';

export default class EvaluationService {
  private evaluations: Evaluation[];

  constructor(evaluations: Evaluation[]) {
    this.evaluations = evaluations;
  }

  private train(callback: Function) {
    this.evaluations.forEach((evaluation) => {
      const model = evaluation.classifier as Trainer;
      if ('train' in model) {
        callback(model);
      }
    });
  }

  public trainFromValue(text: string, label: string) {
    this.train((model: Trainer) => {
      model.train(text, label);
    });
  }

  public trainFromConfig(config: Dataset) {
    this.train((model: Trainer) => {
      const dividerResult = datasetDivider(config, 100);
      datasetTrainer({
        model,
        dataset: dividerResult.train,
        config,
      });
    });
  }

  public evaluate(text: string): EvaluationResult[] {
    return this.evaluations.map<EvaluationResult>((evaluation) => new EvaluationResult({
      evaluation,
      result: evaluation.classifier.classify(text),
    }));
  }
}
