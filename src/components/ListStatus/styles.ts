import styled from 'styled-components/native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 40px 30px 15px;
`;

export const Icon = styled(MaterialIcon)`
  color: #232129;
`;

export const EmptyText = styled.Text`
  color: #232129;
  font-family: 'RobotoSlab-Regular';
  font-size: 28px;
`;
