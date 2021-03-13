import React, { useCallback, useRef } from 'react';
import { View, TextInput } from 'react-native';
import { FormHandles } from '@unform/core';

import { useDispatch } from 'react-redux';
import Input from '../Input';
import Button from '../Button';

import { Container, Title, FormStyled } from './styles';
import { fetchMovies } from '../../store/modules/movie/actions';

const ListHeader: React.FC = () => {
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);
  const searchInputRef = useRef<TextInput>(null);

  const handleSearch = useCallback(
    query => {
      dispatch(fetchMovies(query.search));
    },
    [dispatch],
  );

  return (
    <Container>
      <View>
        <Title>Pesquise seu filme</Title>
      </View>

      <FormStyled ref={formRef} onSubmit={handleSearch}>
        <Input
          ref={searchInputRef}
          name="search"
          icon="search"
          placeholder="Nome do filme"
          returnKeyType="send"
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />

        <Button
          onPress={() => {
            formRef.current?.submitForm();
          }}>
          Pesquisar
        </Button>
      </FormStyled>
    </Container>
  );
};

export default ListHeader;
