<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-text-field
        v-model="text"
        placeholder="Texto para Entrenar"
        outlined
        clearable
        counter
        filled
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-btn :disabled="!!!text" @click="train" color="primary">Entrenar</v-btn>
    </v-col>
  </v-row>
</template>
<script lang="ts" src="./Trainer.ts">
