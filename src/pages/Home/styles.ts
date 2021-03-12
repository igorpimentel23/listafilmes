import styled from 'styled-components/native';

import { FlatList } from 'react-native';
import { Item } from '../../@types';

const ItemsList = styled(FlatList as new () => FlatList<Item>)`
  padding: 0 24px;
`;

export default ItemsList;
