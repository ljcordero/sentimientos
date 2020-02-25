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

  public train(config: Dataset) {
    this.evaluations.forEach((evaluation) => {
      const model = evaluation.classifier as Trainer;
      if ('train' in model) {
        const dividerResult = datasetDivider(config, 100);
        datasetTrainer({
          model,
          dataset: dividerResult.train,
          config,
        });
      }
    });
  }

  public evaluate(text: string): EvaluationResult[] {
    return this.evaluations.map<EvaluationResult>((evaluation) => new EvaluationResult({
      evaluation,
      result: evaluation.classifier.classify(text),
    }));
  }
}
