import React from 'react';
import {TouchableOpacity} from 'react-native';
import Pulse from 'react-native-pulse';
import {useTheme} from 'styled-components/native';

import * as S from './styles';

const Home = () => {
  const typeUser: 'D' | 'P' = 'D';
  const status: 'S' | 'I' | 'P' | 'C' = 'S';

  const theme = useTheme();

  //S -> Sem corrida | I -> Informações | P -> Pesquisa | C -> Corrida

  function renderTopPage() {
    if (status !== 'S') {
      return (
        <S.ContainerEditRoute>
          <S.ContainerTextEditRoute>
            <S.CircleColor color="red" />
            <S.TextEditRoute>Endereço de embarque completo</S.TextEditRoute>
          </S.ContainerTextEditRoute>
          <S.Spacing />
          <S.ContainerTextEditRoute>
            <S.CircleColor color="green" />
            <S.TextEditRoute>Endereço de destino completo</S.TextEditRoute>
          </S.ContainerTextEditRoute>
        </S.ContainerEditRoute>
      );
    }

    return (
      <S.ContainerAvatar>
        <TouchableOpacity>
          <S.Avatar
            source={{
              uri: 'https://img.freepik.com/free-photo/young-happy-man-with-thumbs-up-sign-casuals-isolated_186202-6699.jpg?w=2000',
            }}
          />
        </TouchableOpacity>
      </S.ContainerAvatar>
    );
  }

  function renderCardBottomPassenger() {
    if (typeUser !== 'P') {
      return null;
    }

    if (status === 'C') {
      return (
        <S.ContainerCardBottom>
          <S.TitleCallDriverX>DriverX Convencional</S.TitleCallDriverX>
          <S.ContainerRunningInfo>
            <S.ContainerRunningDriver>
              <S.Avatar
                source={{
                  uri: 'https://img.freepik.com/free-photo/young-happy-man-with-thumbs-up-sign-casuals-isolated_186202-6699.jpg?w=2000',
                }}
              />
              <S.ContainerInfoDriver>
                <S.TextNameDriver>Wesley Bruno</S.TextNameDriver>
                <S.TextCarDriver>Nissan Kicks</S.TextCarDriver>
              </S.ContainerInfoDriver>
            </S.ContainerRunningDriver>
            <S.ContentRunningInfo>
              <S.TextPriceRunning>R$ 14,90</S.TextPriceRunning>
              <S.TextTimeRunning>Aprox. 5 mins</S.TextTimeRunning>
            </S.ContentRunningInfo>
          </S.ContainerRunningInfo>
          <S.ButtonDisabled disabled>
            <S.TextButton>Cancelar Corrida</S.TextButton>
          </S.ButtonDisabled>
        </S.ContainerCardBottom>
      );
    }

    if (status === 'P') {
      return (
        <S.ContainerCardBottom>
          <S.TitleCallDriverX>DriverX Convencional</S.TitleCallDriverX>
          <S.ContainerCallInfo>
            <S.Price>R$ 14,90</S.Price>
            <S.Separator />
            <S.Time>5 mins</S.Time>
          </S.ContainerCallInfo>
          <S.ButtonDisabled disabled>
            <S.TextButton>Cancelar DriverX</S.TextButton>
          </S.ButtonDisabled>
        </S.ContainerCardBottom>
      );
    }

    if (status === 'I') {
      return (
        <S.ContainerCardBottom>
          <S.TitleCallDriverX>DriverX Convencional</S.TitleCallDriverX>
          <S.ContainerCallInfo>
            <S.Price>R$ 14,90</S.Price>
            <S.Separator />
            <S.Time>5 mins</S.Time>
          </S.ContainerCallInfo>
          <S.Button>
            <S.TextButton>Chamar DriverX</S.TextButton>
          </S.Button>
        </S.ContainerCardBottom>
      );
    }

    return (
      <S.ContainerCardBottom>
        <S.TitleCardBottom>Olá, Wesley Bruno.</S.TitleCardBottom>
        <S.SubtitleCardBottom>Para onde voce quer ir?</S.SubtitleCardBottom>
        <S.Input placeholder="Procure um destino" />
      </S.ContainerCardBottom>
    );
  }

  function renderCardBottomDriver() {
    if (typeUser !== 'D') {
      return null;
    }

    if (status === 'S') {
      return (
        <S.ContainerCardBottom>
          <S.ContainerRunningInfo>
            <S.ContainerRunningDriver>
              <S.Avatar
                small
                source={{
                  uri: 'https://img.freepik.com/free-photo/young-happy-man-with-thumbs-up-sign-casuals-isolated_186202-6699.jpg?w=2000',
                }}
              />
              <S.ContainerInfoDriver>
                <S.TextNameDriver>Wesley Bruno (2km)</S.TextNameDriver>
                <S.ContainerAddressAcceptRunning>
                  <S.CircleColor color="red" />
                  <S.AddressAcceptRunning>
                    Endereço de embarque completo
                  </S.AddressAcceptRunning>
                </S.ContainerAddressAcceptRunning>

                <S.ContainerAddressAcceptRunning>
                  <S.CircleColor color="green" />
                  <S.AddressAcceptRunning>
                    Endereço de destino completo
                  </S.AddressAcceptRunning>
                </S.ContainerAddressAcceptRunning>
              </S.ContainerInfoDriver>
            </S.ContainerRunningDriver>

            <S.ContentRunningInfo>
              <S.TextPriceRunning>R$ 14,90</S.TextPriceRunning>
              <S.TextTimeRunning>Aprox. 5 mins</S.TextTimeRunning>
            </S.ContentRunningInfo>
          </S.ContainerRunningInfo>
          <S.Button>
            <S.TextButton>Aceitar Corrida</S.TextButton>
          </S.Button>
        </S.ContainerCardBottom>
      );
    }

    return (
      <S.ContainerCardBottom>
        <S.TitleCardBottom>Olá, Juliana.</S.TitleCardBottom>
        <S.SubtitleCardBottom>Nenhuma corrida encontrada</S.SubtitleCardBottom>
      </S.ContainerCardBottom>
    );
  }

  function renderPulseCircle() {
    if (status === 'P' && typeUser === 'P') {
      return (
        <Pulse color={theme.colors.primary} numPulses={3} diameter={400} />
      );
    }
    return null;
  }

  return (
    <S.Container>
      <S.Map
        disabled={false}
        initialRegion={{
          latitude: -30.011364,
          longitude: -51.1637373,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <S.ContentOverlay>
        {renderTopPage()}
        {renderPulseCircle()}
        {renderCardBottomPassenger()}
        {renderCardBottomDriver()}
      </S.ContentOverlay>
    </S.Container>
  );
};
export default Home;
