<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Análisis de Sentimientos</v-toolbar-title>
    </v-app-bar>
    <div v-if="loading" class="center">
      <v-progress-circular
        size="64"
        width="8"
        indeterminate
        color="primary">
      </v-progress-circular>
    </div>
    <v-content>
      <Content />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import Content from '@/components/Content/Content.vue';

@Component({
  components: {
    Content,
  },
})
export default class App extends Vue {
  @Getter loading!: boolean;
}
</script>

<style lang="scss" scoped>
  .center {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.6);
    z-index: 5;

    > div {
      position: fixed;
      top: 47.5%;
      left: 47.5%;
    }
  }
</style>
