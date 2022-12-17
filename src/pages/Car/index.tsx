import React from 'react';
import {Platform} from 'react-native';

import * as S from './styles';

const CarPage = () => {
  return (
    <S.KeyboardAvoiding behavior="padding" enabled={Platform.OS === 'ios'}>
      <S.SafeArea>
        <S.Container>
          <S.Title>Cadastre seu veículo</S.Title>
          <S.Description>
            Preencha os campos abaixo com os dados do veículo
          </S.Description>

          <S.Form>
            <S.ContainerInputs>
              <S.Input placeholder="Placa" />
              <S.Input placeholder="Marca" />
              <S.Input placeholder="Modelo" />
              <S.Input placeholder="Cor" />
            </S.ContainerInputs>

            <S.Button>
              <S.TextButton>Avançar</S.TextButton>
            </S.Button>
          </S.Form>
        </S.Container>
      </S.SafeArea>
    </S.KeyboardAvoiding>
  );
};
export default CarPage;
