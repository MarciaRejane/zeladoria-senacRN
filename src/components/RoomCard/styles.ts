import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

// Adicionando um tipo para a prop 'status'
type StatusProps = {
  status: 'Limpa' | 'Pendente';
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  margin-bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;

export const Description = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.MEDIUM_GRAY};
`;

export const Status = styled.View<StatusProps>`
  padding: 4px 12px;
  border-radius: 12px;
  background-color: ${({ theme, status }) => 
    status === 'Limpa' ? theme.COLORS.TEAL_GREEN : theme.COLORS.VIBRANT_RED};
`;

export const StatusText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: 12px;
`;