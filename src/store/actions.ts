import { ActionContext, ActionTree } from 'vuex';

import {
  LOADING,
} from './mutation-types';

import State from './state';

// ActionTree<[current state], [root state]>
const actions: ActionTree<State, State> = {
  setLoading({ commit }: ActionContext<State, State>, loading: boolean): void {
    commit(LOADING, loading);
  },
};

export default actions;
