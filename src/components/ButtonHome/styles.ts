import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.MIDNIGHT_BLUE};
  padding: 45px;
  width: 45%;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;
