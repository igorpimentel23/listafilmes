import React from 'react';
import { render } from '@testing-library/react-native';

import ListStatus from '../../components/ListStatus';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('ListStatus', () => {
  it('should be able to render Loading component', () => {
    const { getByText } = render(
      <ListStatus isLoading hasError={false} isEmpty={false} />,
    );

    expect(getByText('Carregando')).toBeTruthy();
  });

  it('should be able to render Error component', () => {
    const { getByText } = render(
      <ListStatus isLoading={false} hasError isEmpty={false} />,
    );

    expect(getByText('Erro')).toBeTruthy();
  });

  it('should be able to render Empty component', () => {
    const { getByText } = render(
      <ListStatus isLoading={false} hasError={false} isEmpty />,
    );

    expect(getByText('Nada para mostrar')).toBeTruthy();
  });
});
