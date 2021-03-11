import { createStore } from 'redux';
import { Item, IItemsArray } from '../@types';
import rootReducer from './modules/rootReducer';

export interface IState {
  search: IItemsArray;
}

const store = createStore(rootReducer);

export default store;
