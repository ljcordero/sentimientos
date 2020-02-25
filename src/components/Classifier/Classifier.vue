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
    <v-col v-if="evaluationsResult && evaluationsResult.length" cols="12">
      <v-card>
        <v-list>
          <v-list-item v-for="(evaluationResult, i) in evaluationsResult" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{ evaluationResult.evaluation.type }}</v-list-item-title>
              <v-list-item-subtitle>{{ evaluationResult.result }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts" src="./Classifier.ts">
