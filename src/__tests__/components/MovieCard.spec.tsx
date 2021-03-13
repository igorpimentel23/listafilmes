import React from 'react';
import { render } from '@testing-library/react-native';

import MovieCard from '../../components/MovieCard';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('MovieCard', () => {
  it('should be able to render', () => {
    const movie = {
      title: 'title',
      year: 2020,
      rating: 10,
      poster: 'poster',
      ids: {
        tmdb: 1,
        slug: 'slug',
      },
    };

    const { getByText } = render(<MovieCard movie={movie} />);

    expect(getByText('title')).toBeTruthy();
  });
});
