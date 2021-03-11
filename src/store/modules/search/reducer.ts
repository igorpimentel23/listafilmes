import { Reducer } from 'redux';
import { IItemsArray } from '../../../@types';

const INITIAL_STATE: IItemsArray = {
  items: [],
  isLoading: false,
  hasError: null,
};

const search: Reducer<IItemsArray> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_PENDING': {
      return {
        ...state,
        isLoading: true,
        hasError: null,
        items: [],
      };
    }

    case 'FETCH_MOVIES_FULFILLED': {
      const items = action.payload;

      return {
        ...state,
        isLoading: false,
        hasError: null,
        items,
      };
    }

    case 'FETCH_MOVIES_REJECTED': {
      return {
        ...state,
        isLoading: false,
        hasError: action.error,
        items: [],
      };
    }

    default: {
      return state;
    }
  }
};

export default search;
