import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContentButtons = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 70px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: ${({theme}) => theme.sizes.button};
  max-width: 240px;
  border-radius: ${({theme}) => theme.sizes.borderRadius};
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  background: ${({theme}) => theme.colors.black};

  flex-direction: row;
`;

export const TextButton = styled.Text`
  color: ${({theme}) => theme.colors.light};
  margin-left: 15px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;
