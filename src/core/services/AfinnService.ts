import Classifier from './interfaces/Classifier';
import DefaultLanguage from '../models/DefaultLanguage';
import Classification from '../models/Classification';

export default class AfinnService implements Classifier {
  // eslint-disable-next-line
  private sentiment = require('multilang-sentiment');

  public classify(text: string): string {
    return this.sentiment(text, DefaultLanguage).comparative >= 0
      ? Classification.Positive
      : Classification.Negative;
  }
}
