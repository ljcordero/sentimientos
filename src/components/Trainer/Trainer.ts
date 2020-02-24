import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Trainer extends Vue {
  private text = '';

  private train(): void {
    console.log(this.text);
  }
}
