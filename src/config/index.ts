import Config from 'react-native-config';

const configs = {
  traktApiUrl: Config.TRAKT_API_URL || 'https://api.trakt.tv',
  traktClientId:
    Config.TRAKT_CLIENT_ID ||
    'fd4ce6e13c2ff160d8b2ba0ca3cd67282c43f794c155faa35d018593338d2b6c',
  tmdbApiUrl: Config.TMDB_API_URL || 'https://api.themoviedb.org/3',
  tmdbApiKey: Config.TMDB_API_KEY || 'b5b72fd56d635b01367976dd0ef04121',
  posterDefaultUrl:
    Config.POSTER_DEFAULT_URL || 'https://bighugelabs.com/img/poster-light.jpg',
  posterApiUrl: Config.POSTER_API_URL || 'https://image.tmdb.org/t/p/w154',
};

export default configs;
