import React from 'react';
import { Text } from 'react-native';

import { Container, Icon, EmptyText } from './styles';

const ListEmpty: React.FC = () => {
  return (
    <Container>
      <Icon name="movie-search" size={100} />
      <EmptyText>Nada para mostrar</EmptyText>
    </Container>
  );
};

export default ListEmpty;
