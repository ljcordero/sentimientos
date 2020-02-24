<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-textarea
        v-model="text"
        @input="debouncedTextChange"
        placeholder="Texto para Clasificar"
        auto-grow
        clearable
        filled
        outlined
        counter
      ></v-textarea>
    </v-col>
    <v-col v-if="classification.result" cols="12">
      <v-alert :type="classification.type">{{ classification.result }}</v-alert>
      <v-card>
        <v-list>
          <v-list-item v-for="(evaluation, i) in evaluations" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{ evaluacion.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ evaluacion.result }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts" src="./Clasifier.ts">
