import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import Classifier from '@/components/Classifier/Classifier.vue';
import Trainer from '@/components/Trainer/Trainer.vue';
import Footer from '@/components/Footer/Footer.vue';
import Description from '@/components/Description/Description.vue';
import Reference from '@/core/models/Reference';

@Component({
  components: {
    Classifier,
    Trainer,
    Footer,
    Description,
  },
})
export default class Content extends Vue {
  @Getter references!: Reference[];
}
