import Classifier from '../services/interfaces/Classifier';
import EvaluationType from './EvaluationType';
import Trainer from '../services/interfaces/Trainer';

export default class Evaluation {
  public type: EvaluationType;

  public classifier: Classifier | (Classifier & Trainer);

  constructor({
    type, classifier,
  }: { type: EvaluationType; classifier: Classifier | (Classifier & Trainer) }) {
    this.type = type;
    this.classifier = classifier;
  }
}
