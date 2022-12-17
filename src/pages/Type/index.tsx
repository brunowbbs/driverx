import React from 'react';
import {SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

const TypePage = () => {
  return (
    <SafeAreaView>
      <S.Container>
        <S.Title>Passageiro ou Motorista?</S.Title>
        <S.Description>
          Selecione qual será s sua função no DriverX
        </S.Description>

        <S.ContainerOptions>
          <S.Button>
            <Icon name="car" size={40} />
            <S.TextOption>Motorista</S.TextOption>
          </S.Button>

          <S.Button>
            <Icon name="street-view" size={40} />
            <S.TextOption>Passageiro</S.TextOption>
          </S.Button>
        </S.ContainerOptions>
      </S.Container>
    </SafeAreaView>
  );
};

export default TypePage;
