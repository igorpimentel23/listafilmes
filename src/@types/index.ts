import { AnyAction } from 'redux';

export interface Item {
  type: string;
  movie: {
    title: string;
    year: number;
    ids: {
      tmdb: number;
      slug: string;
    };
  };
  poster?: string;
  rating?: number | string;
}

export interface IItemsArray {
  items: Item[];
  isLoading: boolean;
  hasError: AnyAction | null;
}
