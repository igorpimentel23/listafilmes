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
import ListEmpty from '../../components/ListEmpty';
import { IState } from '../../store';
import { Item } from '../../@types';

const Home: React.FC = () => {
  const search = useSelector<IState, Item[]>(state => state.search.items);

  return (
    <ItemsList
      data={search}
      ListHeaderComponent={<ListHeader />}
      ListEmptyComponent={<ListEmpty />}
      numColumns={2}
      keyExtractor={item => String(item.movie.ids.trakt)}
      renderItem={({ item }) => (
        <Card>
          <CardContainer>
            <CardImage
              source={{
                uri:
                  'https://image.tmdb.org/t/p/w154/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
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
                <CardYearText>1923</CardYearText>
              </CardYear>
              <CardRating>
                <Icon name="star" />
                <CardRatingText>79%</CardRatingText>
              </CardRating>
            </CardMeta>
          </CardContainer>
        </Card>
      )}
    />
  );
};

export default Home;
