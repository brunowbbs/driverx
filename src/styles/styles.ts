import styled from 'styled-components/native';

type ContainerProps = {
  row?: boolean;
  justify?: string;
  align?: string;
  padding?: number;
  height?: `${number}%` | number;
  position?: 'relative' | 'absolute';
  top?: number;
  zIndex?: number;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  padding: ${props => props.padding || 0};
  max-height: ${props => props.height || 'auto'};
  position: ${props => props.position || 'relative'};
  top: ${props => props.top || 0};
  z-index: ${props => props.zIndex || 0};
  background: ${({theme}) => theme.colors.background};
`;
