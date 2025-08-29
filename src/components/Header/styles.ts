import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  height: 20%;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Centraliza o título */
  padding: 25px; /* Espaçamento para a barra de status */
  background-color: ${({ theme }) => theme.COLORS.MIDNIGHT_BLUE};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute; 
  left: 24px;
  top: 65px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))``;