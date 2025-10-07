import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 20,
  },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Contant = styled.View`
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.ICE_BLUE};
`;

export const InputsContainer = styled.View`
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 25px;
  gap: 5px;
`;

export const RoomTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};
`;
