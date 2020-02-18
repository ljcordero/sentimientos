import { GetterTree } from 'vuex';
import State from './state';

const getters: GetterTree<State, State> = {
  loading: (state: State): boolean => state.loading,
};

export default getters;
