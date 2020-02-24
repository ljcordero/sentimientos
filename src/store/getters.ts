import { GetterTree } from 'vuex';
import Reference from '@/core/models/Reference';
import State from './state';

const getters: GetterTree<State, State> = {
  loading: (state: State): boolean => state.loading,
  repositoryUrl: (state: State): string => state.repositoryUrl,
  references: (state: State): Reference[] => state.references,
};

export default getters;
