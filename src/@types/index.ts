import { AnyAction } from 'redux';

export interface IMovie {
  title: string;
  year: number;
  rating: number;
  poster: string | null;
  ids: {
    tmdb: number;
    slug: string;
  };
}
export interface Item {
  type: string;
  movie: IMovie;
}

export interface IItemsArray {
  items: Item[];
  isLoading: boolean;
  hasError: AnyAction | null;
}

export interface ApiResponse {
  status: number;
  errors: [];
}
