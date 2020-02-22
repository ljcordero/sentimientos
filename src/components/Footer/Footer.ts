import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class Footer extends Vue {
  @Getter repositoryUrl!: string;
}
