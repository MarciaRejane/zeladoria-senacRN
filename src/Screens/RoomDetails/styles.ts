import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 48,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 24px;
`;

export const StatusCard = styled.View`
  width: 100%;
  padding: 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER_DARK_BLUE};
  margin-bottom: 24px;
  align-items: center;
`;

export const StatusText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;

export const InfoBox = styled.View`
  width: 100%;
  padding: 25px;
  border-radius: 8px;
  border-color: ${({theme}) => theme.COLORS.DARK_BLUE};
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  margin-bottom: 24px;
`;

export const InfoTitle = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  margin-bottom: 8px;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.MEDIUM_GRAY};
`;

export const ObservationInput = styled.TextInput`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
 
`;

type ButtonProps = {
  variant: 'green' | 'red' | 'blue';
}

export const ActionButton = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  height: 58px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  ${({ theme, variant }) => {
    if (variant === 'green') {
      return css`background-color: ${theme.COLORS.LIGHT_PINK};`;
    }
    if (variant === 'red') {
      return css`background-color: ${theme.COLORS.LIGHT_PINK};`;
    }
    return css`background-color: ${theme.COLORS.DARK_BLUE};`;
  }}
`;

export const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;