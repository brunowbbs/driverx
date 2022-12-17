import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({theme}) => theme.sizes.paddingPage};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${({theme}) => theme.sizes.title};
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.light};
  font-size: ${({theme}) => theme.sizes.subtitle};
  margin-top: 10px;
`;

export const ContainerOptions = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  border-width: 1px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: ${({theme}) => theme.sizes.borderRadiusLight};
`;

export const TextOption = styled.Text`
  margin-top: 10px;
  font-family: ${({theme}) => theme.fonts.light};
`;
