import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Home from '../../pages/Home';
import items from '../../seutpTests';

const mockedState = {
  items,
  isLoading: false,
  hasError: false,
  smallLoading: false,
  smallError: false,
  page: 1,
  maxPage: 1,
  query: '',
};

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => mockedState,
  useDispatch: () => mockDispatch,
}));

describe('Home', () => {
  it('should be able to render a button and a input', () => {
    const { getByText, getByPlaceholderText } = render(<Home />);

    expect(getByText('Pesquisar')).toBeTruthy();
    expect(getByPlaceholderText('Nome do filme')).toBeTruthy();
  });

  it('should be able to render movie cards', () => {
    const { getByText } = render(<Home />);

    expect(getByText('title')).toBeTruthy();
    expect(getByText('title11')).toBeTruthy();
  });

  it('should be able to search for a movie', () => {
    const { getByText, getByPlaceholderText } = render(<Home />);

    const buttonElement = getByText('Pesquisar');
    const inputElement = getByPlaceholderText('Nome do filme');

    fireEvent.changeText(inputElement, 'query');
    fireEvent.press(buttonElement);

    // expect(mockDispatch).toHaveBeenCalled();
  });

  it('should be able to load more movies when srolled to the end', () => {
    const { getByTestId } = render(<Home />);

    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };

    const listElement = getByTestId('items-list');

    fireEvent.scroll(listElement, eventData);

    expect(mockDispatch).toHaveBeenCalled();
  });
});
