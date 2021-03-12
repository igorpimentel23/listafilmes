import { Reducer } from 'redux';
import { IItemsArray } from '../../../@types';

const INITIAL_STATE: IItemsArray = {
  items: [],
  isLoading: false,
  hasError: null,
};

const movie: Reducer<IItemsArray> = (state = INITIAL_STATE, action) => {
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
      const items = action.payload.data;

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

    case 'APPEND_MOVIE_POSTER_FULFILLED': {
      const newItems = state.items.map(item => {
        if (item.movie?.ids?.tmdb === action.payload.tmdbId) {
          const newItem = item;
          newItem.movie.poster = action.payload.poster;

          return newItem;
        }
        return item;
      });

      return {
        ...state,
        items: newItems,
      };
    }

    default: {
      return state;
    }
  }
};

export default movie;
