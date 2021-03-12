import React from 'react';
import { useSelector } from 'react-redux';

import ItemsList from './styles';
import ListHeader from '../../components/ListHeader';
import ListStatus from '../../components/ListStatus';
import { IState } from '../../store';
import { IItemsArray } from '../../@types';
import MovieCard from '../../components/MovieCard';

const Home: React.FC = () => {
  const { items, isLoading, hasError } = useSelector<IState, IItemsArray>(
    state => state.movie,
  );

  return (
    <ItemsList
      data={items}
      ListHeaderComponent={<ListHeader />}
      ListEmptyComponent={
        <ListStatus
          isEmpty={items.length === 0}
          isLoading={isLoading}
          hasError={!!hasError}
        />
      }
      numColumns={2}
      keyExtractor={item => String(item.movie.ids.tmdb)}
      renderItem={({ item }) => <MovieCard movie={item.movie} />}
    />
  );
};

export default Home;
