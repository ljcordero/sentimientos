import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import Clasifier from '@/components/Clasifier/Clasifier.vue';
import Trainer from '@/components/Trainer/Trainer.vue';
import Footer from '@/components/Footer/Footer.vue';

@Component({
  components: {
    Clasifier,
    Trainer,
    Footer,
  },
})
export default class Content extends Vue {
  @Getter references!: any[];
}
