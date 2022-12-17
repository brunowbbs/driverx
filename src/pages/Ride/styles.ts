import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const KeyboardAvoiding = styled.KeyboardAvoidingView`
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

export const Form = styled.View`
  margin-top: 30px;
`;

export const ContainerInputs = styled.View``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#313131',
})`
  height: ${({theme}) => theme.sizes.input};
  border-width: 1px;
  margin-bottom: 15px;
  padding: 10px;

  border-radius: ${({theme}) => theme.sizes.borderRadiusLight};
  font-family: ${({theme}) => theme.fonts.light};
  font-size: ${({theme}) => theme.sizes.text};
`;

export const AddressItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: ${({theme}) => theme.sizes.button};
  border-radius: ${({theme}) => theme.sizes.borderRadiusLight};
  margin-bottom: 5px;
`;

export const TitleList = styled.Text`
  margin-left: 5px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const SubTitleList = styled.Text`
  margin-left: 5px;
  font-family: ${({theme}) => theme.fonts.light};
`;

export const Flatlist = styled.FlatList`
  flex: 1;
  width: 100%;
`;
