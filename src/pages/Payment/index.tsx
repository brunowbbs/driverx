import React from 'react';
import CreditCard from 'react-native-credit-card-form-ui';
import {useTheme} from 'styled-components/native';

import * as S from './styles';

const PaymentPage = () => {
  const creditCardRef = React.useRef() as any;

  const theme = useTheme();

  // const handleSubmit = React.useCallback(() => {
  //   if (creditCardRef.current) {
  //     const {error, data} = creditCardRef.current.submit();
  //     console.log('ERROR: ', error);
  //     console.log('CARD DATA: ', data);
  //   }
  // }, []);

  return (
    <S.SafeArea>
      <S.Container>
        <S.Title>Escolha como pagar</S.Title>
        <S.Description>
          Preencha com os dados do seu cartão de crédito
        </S.Description>
        <S.ContainerCard>
          <CreditCard
            ref={creditCardRef}
            background={theme.colors.dark}
            textColor={theme.colors.light}
          />
        </S.ContainerCard>
        <S.Button>
          <S.TextButton>Comece a usar</S.TextButton>
        </S.Button>
      </S.Container>
    </S.SafeArea>
  );
};
export default PaymentPage;
