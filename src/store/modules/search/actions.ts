/* eslint-disable no-await-in-loop */
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { apiTrakt, apiTmdb } from '../../../services/api';
import { traktClientId, tmdbApiKey } from '../../../assets/secrets';
import { Item } from '../../../@types';

const getRating = async (slug: string) => {
  let res;
  let rating;

  try {
    res = await apiTrakt.get(`/movies/${slug}/ratings`, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': traktClientId,
      },
    });
    rating = res.data.rating.toFixed(2);
  } catch (err) {
    rating = '---';
  }

  return rating;
};

const getPoster = async (tmdbId: string) => {
  let res;
  let poster = '';
  try {
    res = await apiTmdb.get(`/movie/${tmdbId}`, {
      params: {
        api_key: tmdbApiKey,
      },
    });

    poster = res.data.poster_path
      ? `https://image.tmdb.org/t/p/w154/${res.data.poster_path}`
      : 'https://bighugelabs.com/img/poster-light.jpg';
  } catch {
    poster = 'https://bighugelabs.com/img/poster-light.jpg';
  }

  return poster;
};

const storeSearch = (query: string) => async (
  dispatch: ThunkDispatch<Item[], void, Action>,
): Promise<void> => {
  dispatch({
    type: 'FETCH_MOVIES',
    payload: apiTrakt
      .get(`/search/movie`, {
        params: {
          query,
        },
        headers: {
          'Content-Type': 'application/json',
          'trakt-api-version': '2',
          'trakt-api-key': traktClientId,
        },
      })
      .then(async response => {
        const elements = [];
        let element = {};

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < response.data.length; i++) {
          const r = response.data[i];

          element = {
            ...r,
            poster: await getPoster(r.movie.ids.tmdb),
            rating: await getRating(r.movie.ids.slug),
          };

          elements.push(element);
        }

        return elements;
      })
      .catch(err => console.log(err)),
  });
};
export default storeSearch;
