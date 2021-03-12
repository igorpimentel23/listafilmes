import { Reducer } from 'redux';
import { IItemsArray } from '../../../@types';

const INITIAL_STATE: IItemsArray = {
  items: [],
  isLoading: false,
  hasError: false,
  smallLoading: false,
  smallError: false,
  page: 1,
  maxPage: 1,
  query: '',
};

const movie: Reducer<IItemsArray> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_PENDING': {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        page: 1,
        maxPage: 1,
        query: '',
        items: [],
      };
    }

    case 'FETCH_MOVIES_FULFILLED': {
      const items = action.payload.data;
      const { query, page } = action.payload.config.params;
      const maxPage = action.payload.headers['x-pagination-page-count'];

      return {
        ...state,
        isLoading: false,
        hasError: false,
        page,
        maxPage,
        query,
        items,
      };
    }

    case 'FETCH_MOVIES_REJECTED': {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        page: 1,
        maxPage: 1,
        query: '',
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

    case 'FETCH_NEXT_MOVIE_PAGE_PENDING': {
      return {
        ...state,
        smallLoading: true,
        smallError: false,
      };
    }

    case 'FETCH_NEXT_MOVIE_PAGE_FULFILLED': {
      const newItems = action.payload.data;
      const { page } = action.payload.config.params;

      return {
        ...state,
        page,
        items: state.items.concat(newItems),
        smallLoading: false,
        smallError: false,
      };
    }

    case 'FETCH_NEXT_MOVIE_PAGE_REJECTED': {
      return {
        ...state,
        smallLoading: false,
        smallError: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default movie;
