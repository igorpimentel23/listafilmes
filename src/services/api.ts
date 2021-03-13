import axios from 'axios';

import configs from '../config';

export const apiTrakt = axios.create({
  baseURL: configs.traktApiUrl,
});

export const apiTmdb = axios.create({
  baseURL: configs.tmdbApiUrl,
});
