import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { IItemsArray } from '../@types';
import rootReducer from './modules/rootReducer';

export interface IState {
  movie: IItemsArray;
}

const store = createStore(rootReducer, applyMiddleware(thunk, promise));

export default store;
