import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { debounce } from 'ts-debounce';
import EvaluationService from '@/core/services/EvaluationService';
import EvaluationResult from '@/core/models/EvaluationResult';
import { TweetTASS } from '@/core/models/Dataset';
import { Getter } from 'vuex-class';

const ONE_SECOND_MILLISECONDS = 1000;

@Component
export default class Classifier extends Vue {
  @Getter evaluation!: EvaluationService;

  private text = '';

  private evaluationsResult: EvaluationResult[] = [];

  private debouncedTextChange = debounce(this.onTextChange, ONE_SECOND_MILLISECONDS);

  mounted() {
    this.evaluation.trainFromConfig(TweetTASS);
  }

  private onTextChange(): void {
    this.evaluationsResult = [];
    if (this.text) {
      this.evaluationsResult = this.evaluation.evaluate(this.text);
    }
  }
}
