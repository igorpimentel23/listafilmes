import { Reducer } from 'redux';
import { IItemsArray } from '../../../@types';

const INITIAL_STATE: IItemsArray = {
  items: [],
};

const search: Reducer<IItemsArray> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STORE_SEARCH': {
      const { items } = action.payload;

      return {
        ...state,
        items,
      };
    }

    default: {
      return state;
    }
  }
};

export default search;
