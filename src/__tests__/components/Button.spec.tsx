import React from 'react';
import { render } from '@testing-library/react-native';

import Button from '../../components/Button';

describe('Button', () => {
  it('should be able to render', () => {
    const { getByText } = render(<Button>Button</Button>);

    expect(getByText('Button')).toBeTruthy();
  });
});
