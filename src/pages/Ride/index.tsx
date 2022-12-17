import React from 'react';
import {Platform} from 'react-native';

import * as S from './styles';

const RidePage = () => {
  return (
    <S.KeyboardAvoiding behavior="padding" enabled={Platform.OS === 'ios'}>
      <S.SafeArea>
        <S.Container>
          <S.Title>Corrida</S.Title>
          <S.Description>Voltar</S.Description>

          <S.Form>
            <S.ContainerInputs>
              <S.Input placeholder="Embarque" />
              <S.Input placeholder="Destino" />
            </S.ContainerInputs>
          </S.Form>

          <S.Flatlist
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={({_, index}: any) => (
              <S.AddressItem key={index}>
                <S.TitleList>Menlo Parl</S.TitleList>
                <S.SubTitleList>Palo Alto, CA</S.SubTitleList>
              </S.AddressItem>
            )}
          />
          {/* <S.Button>
              <S.TextButton>Avançar</S.TextButton>
            </S.Button> */}
        </S.Container>
      </S.SafeArea>
    </S.KeyboardAvoiding>
  );
};
export default RidePage;
