import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ClassificationList } from '@/core/models/Classification';

@Component
export default class Trainer extends Vue {
  private text = '';

  private classification = '';

  private classifications = ClassificationList;

  private get btnDisabled() {
    return !this.text || !this.classification;
  }

  private train(): void {
    console.log(this.text);
  }
}
