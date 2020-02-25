import Evaluation from './Evaluation';

export default class EvaluationResult {
  public evaluation!: Evaluation;

  public result!: string;

  constructor({ evaluation, result }: { evaluation: Evaluation; result: string }) {
    this.evaluation = evaluation;
    this.result = result;
  }
}
