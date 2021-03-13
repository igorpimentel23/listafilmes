import React from 'react';
import { render } from '@testing-library/react-native';

import ListHeader from '../../components/ListHeader';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('ListHeader', () => {
  it('should be able to render', () => {
    const { getByText } = render(<ListHeader />);

    expect(getByText('Pesquise seu filme')).toBeTruthy();
  });

  it('should be able to render an input and a button', () => {
    const { getByText, getByPlaceholderText } = render(<ListHeader />);

    expect(getByPlaceholderText('Nome do filme')).toBeTruthy();
    expect(getByText('Pesquisar')).toBeTruthy();
  });
});
