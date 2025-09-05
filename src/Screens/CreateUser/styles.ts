import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER_DARK_BLUE};
  align-items: center;
`;

export const Contant = styled.View`
  margin-top: 20px;
  border-radius: 20px;
  justify-content: center;
  width: 90%;
  height: 90%;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const AdminInputs = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

export const AdminContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  align-items: center;
`;

export const AdminText = styled.Text`
  color: ${({ theme }) => theme.COLORS.VIBRANT_RED};
  font-size: 16px;
`;

export const ImageUser = styled.Image`
  margin-top: 10px;
`;
