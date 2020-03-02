import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { debounce } from 'ts-debounce';
import EvaluationService from '@/core/services/EvaluationService';
import EvaluationResult from '@/core/models/EvaluationResult';
import { TweetTASS } from '@/core/models/Dataset';
import { Getter, Action } from 'vuex-class';

const ONE_SECOND_MILLISECONDS = 1000;

@Component
export default class Classifier extends Vue {
  @Action setLoading!: (loading: boolean) => void;

  @Getter evaluation!: EvaluationService;

  private text = '';

  private evaluationsResult: EvaluationResult[] = [];

  private debouncedTextChange = debounce(this.onTextChange, ONE_SECOND_MILLISECONDS);

  async mounted() {
    this.setLoading(true);
    await this.evaluation.trainFromConfig(TweetTASS);
    this.setLoading(false);
  }

  private onTextChange(): void {
    this.evaluationsResult = [];
    if (this.text) {
      this.evaluationsResult = this.evaluation.evaluate(this.text);
    }
  }
}
