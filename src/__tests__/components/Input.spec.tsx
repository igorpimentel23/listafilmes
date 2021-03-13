import React from 'react';
import { render } from '@testing-library/react-native';

import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Button', () => {
  it('should be able to render', () => {
    const { getByPlaceholderText } = render(
      <Input icon="check" name="input" placeholder="input" />,
    );

    expect(getByPlaceholderText('input')).toBeTruthy();
  });
});
