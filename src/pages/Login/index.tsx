import React from 'react';
import {Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import logo from '../../assets/logo.png';

import * as S from './styles';

const LoginPage = () => {
  return (
    <S.Container>
      <Image source={logo} />

      <S.ContentButtons>
        <S.Button>
          <Icon name="google" color="#FFF" size={15} />
          <S.TextButton>Entrar com o Google</S.TextButton>
        </S.Button>

        <S.Button>
          <Icon name="facebook" color="#FFF" size={15} />
          <S.TextButton>Entrar com o Facebook</S.TextButton>
        </S.Button>
      </S.ContentButtons>
    </S.Container>
  );
};

export default LoginPage;
