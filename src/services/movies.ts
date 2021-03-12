import configs from '../config';
import { apiTmdb, apiTrakt } from './api';
import { Item, ApiResponse } from '../@types';

interface IMoviePoster {
  poster: string;
  tmdbId: number;
}

interface GetResponse extends ApiResponse {
  data: Item[];
}

export const getMovies = (query: string): Promise<GetResponse> =>
  apiTrakt.get('/search/movie', {
    params: {
      query,
      extended: 'full',
    },
    headers: {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key': configs.traktClientId,
    },
  });

export const getMoviePoster = async (tmdbId: number): Promise<IMoviePoster> => {
  let poster = configs.posterDefaultUrl;
  await apiTmdb
    .get(`/movie/${tmdbId}`, {
      params: {
        api_key: configs.tmdbApiKey,
      },
    })
    .then(response => {
      if (response.data.poster_path) {
        poster = `${configs.posterApiUrl}${response.data.poster_path}`;
      }
    })
    .catch(() => null);

  return { poster, tmdbId };
};
