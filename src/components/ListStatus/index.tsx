import React from 'react';

import { Container, Icon, EmptyText } from './styles';

interface IListProps {
  isEmpty: boolean;
  isLoading: boolean;
  hasError: boolean;
}

const ListEmpty: React.FC<IListProps> = ({ isEmpty, isLoading, hasError }) => {
  return (
    <Container>
      {isLoading && (
        <>
          <Icon name="cog" size={100} />
          <EmptyText>Carregando</EmptyText>
        </>
      )}
      {hasError && !isLoading && (
        <>
          <Icon name="skull-crossbones" size={100} />
          <EmptyText>Erro</EmptyText>
        </>
      )}
      {isEmpty && !isLoading && !hasError && (
        <>
          <Icon name="movie-search" size={100} />
          <EmptyText>Nada para mostrar</EmptyText>
        </>
      )}
    </Container>
  );
};

export default ListEmpty;
