import { GetterTree } from 'vuex';
import Reference from '@/core/models/Reference';
import EvaluationService from '@/core/services/EvaluationService';
import { cloneDeep } from 'lodash';
import State from './state';

const getters: GetterTree<State, State> = {
  loading: (state: State): boolean => state.loading,
  repositoryUrl: (state: State): string => state.repositoryUrl,
  references: (state: State): Reference[] => state.references,
  evaluation: (state: State): EvaluationService => cloneDeep(state.evaluation),
};

export default getters;
