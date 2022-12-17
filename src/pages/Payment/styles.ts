import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  padding: ${({theme}) => theme.sizes.paddingPage};
  flex: 1;
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

export const ContainerCard = styled.View`
  margin: 50px 0;
  flex: 1;
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

  background: ${({theme}) => theme.colors.black};

  flex-direction: row;
`;

export const TextButton = styled.Text`
  color: ${({theme}) => theme.colors.light};
  margin-left: 15px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;
