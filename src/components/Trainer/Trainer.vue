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
      <v-select
        v-model="classification"
        :items="classifications"
        filled
        outlined
        label="Clasificación"
      ></v-select>
    </v-col>
    <v-col cols="12">
      <v-btn :disabled="btnDisabled" @click="train" color="primary">Entrenar</v-btn>
    </v-col>
    <v-snackbar v-model="snackbar" top color="success">Entrenado</v-snackbar>
  </v-row>
</template>
<script lang="ts" src="./Trainer.ts">
