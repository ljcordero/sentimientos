import { GetterTree } from 'vuex';
import State from './state';

const getters: GetterTree<State, State> = {
  loading: (state: State): boolean => state.loading,
  repositoryUrl: (state: State): string => state.repositoryUrl,
  references: (state: State): any[] => state.references,
};

export default getters;
