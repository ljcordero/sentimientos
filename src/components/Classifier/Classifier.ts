import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { debounce } from 'ts-debounce';
import EvaluationService from '@/core/services/EvaluationService';
import Evaluation from '@/core/models/Evaluation';
import AfinnService from '@/core/services/AfinnService';
import EvaluationResult from '@/core/models/EvaluationResult';
import EvaluationType from '@/core/models/EvaluationType';
import NaiveBayesService from '@/core/services/NaiveBayesService';
import { TweetTASS } from '@/core/models/Dataset';

const ONE_SECOND_MILLISECONDS = 1000;

@Component
export default class Classifier extends Vue {
  private text = '';

  private evaluation: EvaluationService = new EvaluationService([
    new Evaluation({
      type: EvaluationType.AFINN_165,
      classifier: new AfinnService(),
    }),
    new Evaluation({
      type: EvaluationType.NaiveBayes,
      classifier: new NaiveBayesService(),
    }),
  ]);

  private evaluationsResult: EvaluationResult[] = [];

  private debouncedTextChange = debounce(this.onTextChange, ONE_SECOND_MILLISECONDS);

  mounted() {
    this.evaluation.train(TweetTASS);
  }

  private onTextChange(): void {
    this.evaluationsResult = [];
    if (this.text) {
      this.evaluationsResult = this.evaluation.evaluate(this.text);
    }
  }
}
