import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  font-size: 16;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const ViewWhate = styled.View`
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
`;
