import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { debounce } from 'ts-debounce';

const ONE_SECOND_MILLISECONDS = 1000;

@Component
export default class Clasifier extends Vue {
  private text = '';

  private classification = {
    type: '',
    result: '',
    evaluations: [],
  };

  private debouncedTextChange = debounce(this.onTextChange, ONE_SECOND_MILLISECONDS);

  private onTextChange(): void {
    if (this.text) {
      console.log(this.text);
    }
  }
}
