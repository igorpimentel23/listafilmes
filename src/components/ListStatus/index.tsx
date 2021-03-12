import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { Container, Icon, EmptyText } from './styles';

interface IListProps {
  isEmpty: boolean;
  isLoading: boolean;
  hasError: boolean;
}

const ListEmpty: React.FC<IListProps> = ({ isEmpty, isLoading, hasError }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    }
  }, [isLoading, spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container>
      {isLoading && (
        <>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Icon name="cog" size={100} />
          </Animated.View>
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
