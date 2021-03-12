import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ItemsList from './styles';
import ListHeader from '../../components/ListHeader';
import ListStatus from '../../components/ListStatus';
import SmallListStatus from '../../components/SmallListStatus';
import { IState } from '../../store';
import { IItemsArray } from '../../@types';
import MovieCard from '../../components/MovieCard';
import { fetchNextMoviePage } from '../../store/modules/movie/actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const {
    items,
    isLoading,
    hasError,
    smallLoading,
    smallError,
    page,
    maxPage,
    query,
  } = useSelector<IState, IItemsArray>(state => state.movie);

  const handleMovieLoad = () => {
    if (!smallLoading && !smallError && page <= maxPage) {
      dispatch(fetchNextMoviePage(query, page + 1));
    }
  };

  return (
    <ItemsList
      data={items}
      columnWrapperStyle={{ paddingRight: 24, paddingLeft: 24 }}
      ListHeaderComponent={<ListHeader />}
      stickyHeaderIndices={[0]}
      ListFooterComponent={
        <SmallListStatus isLoading={smallLoading} hasError={smallError} />
      }
      ListEmptyComponent={
        <ListStatus
          isEmpty={items.length === 0}
          isLoading={isLoading}
          hasError={hasError}
        />
      }
      numColumns={2}
      keyExtractor={item => String(item.movie.ids.tmdb)}
      renderItem={({ item }) => <MovieCard movie={item.movie} />}
      onEndReached={() => handleMovieLoad()}
      onEndReachedThreshold={0.5}
    />
  );
};

export default Home;
