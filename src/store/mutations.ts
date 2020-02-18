import { MutationTree } from 'vuex';

import {
  LOADING,
} from './mutation-types';

import State from './state';

const mutations: MutationTree<State> = {
  /* APP */
  [LOADING](state: State, loading: boolean): void {
    state.loading = loading;
  },
};

export default mutations;
