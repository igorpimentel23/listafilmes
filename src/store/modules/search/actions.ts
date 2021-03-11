import { Item } from '../../../@types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function storeSearch(items: Item[]) {
  return {
    type: 'STORE_SEARCH',
    payload: {
      items,
    },
  };
}
