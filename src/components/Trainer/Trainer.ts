import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ClassificationList } from '@/core/models/Classification';
import EvaluationService from '@/core/services/EvaluationService';
import { Getter } from 'vuex-class';

@Component
export default class Trainer extends Vue {
  @Getter evaluation!: EvaluationService;

  private text = '';

  private classification = '';

  private classifications = ClassificationList;

  private snackbar = false;

  private get btnDisabled() {
    return !this.text || !this.classification;
  }

  private train(): void {
    this.evaluation.trainFromValue(this.text, this.classification);
    this.snackbar = true;
    this.classification = '';
    this.text = '';
  }
}
