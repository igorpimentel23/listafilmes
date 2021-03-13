import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { Container, Icon } from './styles';

interface IListProps {
  isLoading: boolean;
  hasError: boolean;
}

const SmallListStatus: React.FC<IListProps> = ({ isLoading, hasError }) => {
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
            <Icon testID="loading" name="cog" size={25} />
          </Animated.View>
        </>
      )}
      {hasError && !isLoading && (
        <>
          <Icon testID="error" name="skull-crossbones" size={20} />
        </>
      )}
    </Container>
  );
};

export default SmallListStatus;
