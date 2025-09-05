import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const InputsContainer = styled.View`
  justify-content: center;
  padding: 20px;
`;

export const RoomTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;
