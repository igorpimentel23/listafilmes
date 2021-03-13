import styled from 'styled-components/native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Card = styled.View`
  background: #232129;
  margin: 8px 1%;
  border-radius: 10px;
  overflow: hidden;
  width: 48%;
`;

export const CardContainer = styled.View``;

export const CardImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const CardMeta = styled.View`
  padding: 12px;
`;

export const CardTitleText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
`;

export const CardTitleTextWrapper = styled.View`
  flex-shrink: 1;
`;

export const CardTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

export const CardYearText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #f4ede8;
`;

export const CardYear = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

export const CardRatingText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #f4ede8;
`;

export const CardRating = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(MaterialIcon)`
  margin-right: 16px;
  color: #f4ede8;
`;
