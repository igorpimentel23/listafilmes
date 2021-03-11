import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import {
  ItemsList,
  Card,
  CardContainer,
  CardImage,
  CardMeta,
  CardTitle,
  CardYear,
  CardRating,
  CardTitleText,
  CardYearText,
  CardRatingText,
  Icon,
  CardTitleTextWrapper,
} from './styles';
import ListHeader from '../../components/ListHeader';
import ListStatus from '../../components/ListStatus';
import { IState } from '../../store';
import { IItemsArray } from '../../@types';

const Home: React.FC = () => {
  const { items, isLoading, hasError } = useSelector<IState, IItemsArray>(
    state => state.search,
  );

  const isEmpty = items.length === 0;

  return (
    <ItemsList
      data={items}
      ListHeaderComponent={<ListHeader />}
      ListEmptyComponent={
        <ListStatus
          isEmpty={isEmpty}
          isLoading={isLoading}
          hasError={!!hasError}
        />
      }
      numColumns={2}
      keyExtractor={item => String(item.movie.ids.tmdb)}
      renderItem={({ item }) => (
        <Card>
          <CardContainer>
            <CardImage
              source={{
                uri: item.poster,
              }}
            />
            <CardMeta>
              <CardTitle>
                <Icon name="movie" />
                <CardTitleTextWrapper>
                  <CardTitleText>{item.movie.title}</CardTitleText>
                </CardTitleTextWrapper>
              </CardTitle>
              <CardYear>
                <Icon name="calendar-today" />
                <CardYearText>
                  {item.movie.year ? item.movie.year : '---'}
                </CardYearText>
              </CardYear>
              <CardRating>
                <Icon name="star" />
                <CardRatingText>{item.rating}</CardRatingText>
              </CardRating>
            </CardMeta>
          </CardContainer>
        </Card>
      )}
    />
  );
};

export default Home;
