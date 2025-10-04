import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Contant = styled.View`
  height: 90%;
  background-color: ${({ theme }) => theme.COLORS.neutralLight};
  padding: 16px;
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
