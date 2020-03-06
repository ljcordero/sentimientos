<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../../assets/logo.jpg')" class="my-3" contain height="300" />
      </v-col>

      <v-col class="mb-5" cols="12">
        <h1 class="display-2 font-weight-bold mb-3">Análisis de Sentimientos</h1>
        <br />
        <Description />
      </v-col>

      <v-col class="mb-5" cols="12">
        <h1 class="display-2 font-weight-bold mb-3">Demo</h1>
      </v-col>
      <v-col class="mb-5" cols="6">
        <h2 class="headline font-weight-bold mb-3">Clasificar</h2>
        <Classifier />
      </v-col>

      <v-col class="mb-5" cols="6">
        <h2 class="headline font-weight-bold mb-3">Entrenar</h2>
        <Trainer />
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Referencias</h2>
        <div v-for="(reference, i) in references" :key="i">
          <a :href="reference.href" class="subheading mx-3" target="_blank">{{ reference.text }}</a>
          <br />
        </div>
      </v-col>
    </v-row>
    <br />
    <Footer />
  </v-container>
</template>
<script lang="ts" src="./Content.ts">
