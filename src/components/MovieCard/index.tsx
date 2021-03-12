import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { IMovie } from '../../@types';
import configs from '../../config';
import { fetchMoviePoster } from '../../store/modules/movie/actions';
import {
  Icon,
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
  CardTitleTextWrapper,
} from './styles';

interface IMovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviePoster(movie.ids.tmdb));
  }, [dispatch, movie.ids.tmdb]);

  return (
    <Card>
      <CardContainer>
        <CardImage
          source={{
            uri: movie.poster || configs.posterDefaultUrl,
          }}
        />
        <CardMeta>
          <CardTitle>
            <Icon name="movie" />
            <CardTitleTextWrapper>
              <CardTitleText>{movie.title}</CardTitleText>
            </CardTitleTextWrapper>
          </CardTitle>
          <CardYear>
            <Icon name="calendar-today" />
            <CardYearText>{movie.year || '---'}</CardYearText>
          </CardYear>
          <CardRating>
            <Icon name="star" />
            <CardRatingText>{movie.rating?.toFixed(2)}</CardRatingText>
          </CardRating>
        </CardMeta>
      </CardContainer>
    </Card>
  );
};

export default MovieCard;
