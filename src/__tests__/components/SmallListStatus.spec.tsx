import React from 'react';
import { render } from '@testing-library/react-native';

import SmallListStatus from '../../components/SmallListStatus';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('SmallListStatus', () => {
  it('should be able to render Loading component', () => {
    const { getByTestId } = render(
      <SmallListStatus isLoading hasError={false} />,
    );

    expect(getByTestId('loading')).toBeTruthy();
  });

  it('should be able to render Error component', () => {
    const { getByTestId } = render(
      <SmallListStatus isLoading={false} hasError />,
    );

    expect(getByTestId('error')).toBeTruthy();
  });
});
