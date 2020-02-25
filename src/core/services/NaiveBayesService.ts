import BayesClassifier from 'bayes-classifier';
import Classifier from './interfaces/Classifier';
import Trainer from './interfaces/Trainer';

export default class NaiveBayesService implements Classifier, Trainer {
  private classifier = new BayesClassifier();

  public classify(text: string): string {
    return this.classifier.classify(text);
  }

  public train(text: string, label: string): void {
    this.classifier.addDocument(text, label);
    this.classifier.train();
  }
}
