import Classifier from './interfaces/Classifier';
import DefaultLanguage from '../models/DefaultLanguage';

export default class AfinnService implements Classifier {
  // eslint-disable-next-line
  private sentiment = require('multilang-sentiment');

  public classify(text: string): string {
    return this.sentiment(text, DefaultLanguage).comparative >= 0 ? 'Positivo' : 'Negativo';
  }
}
