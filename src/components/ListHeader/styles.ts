import styled from 'styled-components/native';
import { Form } from '@unform/mobile';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 40px 1% 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin: 0 0 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const FormStyled = styled(Form)`
  width: 100%;
`;
