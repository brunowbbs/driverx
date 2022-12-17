import MapView from 'react-native-maps';

import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;

type MapProps = {
  disabled: boolean;
};

export const Map = styled(MapView)<MapProps>`
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.disabled ? 0.2 : 1)};
`;

export const Spacing = styled.View`
  height: 8px;
`;

export const ContentOverlay = styled.View`
  position: absolute;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  z-index: 999;
  pointer-events: box-none;
  height: 100%;
  width: 100%;
`;

export const ContainerAvatar = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: flex-start;
`;

type AvatarProps = {
  small?: boolean;
};

export const Avatar = styled.Image<AvatarProps>`
  width: ${props => (props.small ? '35px' : '50px')};
  height: ${props => (props.small ? '35px' : '50px')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  background: ${({theme}) => theme.colors.muted};
  border-radius: ${props => (props.small ? '35px' : '50px')};
`;

export const ContainerEditRoute = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 100%;
  border-radius: ${({theme}) => theme.sizes.borderRadiusLight};
  padding: 20px;
  margin-top: 20px;

  background: ${({theme}) => theme.colors.light};
`;

export const ContainerTextEditRoute = styled.View`
  flex-direction: row;
  align-items: center;
`;

type CircleColorProps = {
  color: 'red' | 'green';
};

export const CircleColor = styled.View<CircleColorProps>`
  width: 12px;
  height: 12px;
  background: ${({color}) => color};
  border-radius: 10px;
`;

export const TextEditRoute = styled.Text`
  font-family: ${({theme}) => theme.fonts.light};
  margin-left: 10px;
`;

export const ContainerCardBottom = styled.View`
  background-color: ${({theme}) => theme.colors.light};
  padding: 20px;
  width: 100%;
  border-radius: ${({theme}) => theme.sizes.borderRadiusLight};
`;

export const ContainerRunningInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const ContainerRunningDriver = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  border-right-width: 1px;
  border-right-color: ${({theme}) => theme.colors.muted};
  margin-right: 5px;
`;

export const ContainerInfoDriver = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const TextNameDriver = styled.Text`
  margin-bottom: 1px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const TextCarDriver = styled.Text`
  font-family: ${({theme}) => theme.fonts.light};
`;

export const TextPriceRunning = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const TextTimeRunning = styled.Text`
  font-family: ${({theme}) => theme.fonts.light};
`;

export const ContentRunningInfo = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

export const TitleCardBottom = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: 15px;
  margin-bottom: 5px;
`;

export const SubtitleCardBottom = styled.Text`
  font-family: ${({theme}) => theme.fonts.light};
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#313131',
})`
  height: ${({theme}) => theme.sizes.input};
  border-width: 1px;
  padding: 10px;

  border-radius: ${({theme}) => theme.sizes.borderRadiusLight};
  font-family: ${({theme}) => theme.fonts.light};
  font-size: ${({theme}) => theme.sizes.text};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: ${({theme}) => theme.sizes.button};
  border-radius: ${({theme}) => theme.sizes.borderRadiusLight};
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  background: ${({theme}) => theme.colors.black};
`;

export const ButtonDisabled = styled.TouchableOpacity`
  width: 100%;
  height: ${({theme}) => theme.sizes.button};
  border-radius: ${({theme}) => theme.sizes.borderRadiusLight};
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  background: ${({theme}) => theme.colors.muted};
`;

export const TextButton = styled.Text`
  color: ${({theme}) => theme.colors.light};
  margin-left: 15px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const TitleCallDriverX = styled.Text`
  font-family: ${({theme}) => theme.fonts.light};
  font-size: 15px;
  margin-bottom: 5px;
  text-align: center;
`;

export const ContainerCallInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: 20px;
  margin-bottom: 5px;
  text-align: center;
`;

export const Time = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: 20px;
  margin-bottom: 5px;
  text-align: center;
`;

export const Separator = styled.View`
  width: 1px;
  height: 100%;
  background: ${({theme}) => theme.colors.dark};
  margin: 0 10px;
`;

export const ContainerAddressAcceptRunning = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddressAcceptRunning = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({theme}) => theme.fonts.light};
  flex: 1;
  font-size: 12px;
  margin: 2px;
  margin-left: 5px;
  font-size: 11px;
`;
