export interface Item {
  type: string;
  movie: {
    title: string;
    ids: {
      trakt: number;
    };
  };
}

export interface IItemsArray {
  items: Item[];
}
