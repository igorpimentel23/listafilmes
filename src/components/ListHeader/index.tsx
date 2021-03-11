import React, { useCallback, useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import { FormHandles } from '@unform/core';

import { useDispatch, useStore } from 'react-redux';
import Input from '../Input';
import Button from '../Button';

import api from '../../services/api';
import { traktClientId, tmdbApiKey } from '../../assets/secrets';
import { IItemsArray, Item } from '../../@types';
import { Container, Title, FormStyled } from './styles';
import storeSearch from '../../store/modules/search/actions';

const ListHeader: React.FC = () => {
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);
  const searchInputRef = useRef<TextInput>(null);

  const handleSearch = useCallback(
    async (query: string) => {
      try {
        const response = await api.get(`/search/movie`, {
          params: {
            query: query.search,
          },
          headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': traktClientId,
          },
        });

        dispatch(storeSearch(response.data));
      } catch (err) {
        console.log(err);
      }
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
          placeholder="Nome do filme ou série"
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
