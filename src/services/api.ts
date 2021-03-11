import axios from 'axios';

export const apiTrakt = axios.create({
  baseURL: 'https://api.trakt.tv',
});

export const apiTmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
