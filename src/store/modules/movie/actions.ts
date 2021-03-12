/* eslint-disable no-await-in-loop */
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Item } from '../../../@types';
import { getMoviePoster, getMovies } from '../../../services/movies';

export const fetchMovies = (query: string) => async (
  dispatch: ThunkDispatch<Item[], void, Action>,
): Promise<void> => {
  dispatch({
    type: 'FETCH_MOVIES',
    payload: getMovies(query),
  });
};

export const fetchMoviePoster = (tmdbId: number) => async (
  dispatch: ThunkDispatch<string, void, Action>,
): Promise<void> => {
  dispatch({
    type: 'APPEND_MOVIE_POSTER',
    tmdbId,
    payload: getMoviePoster(tmdbId),
  });
};
