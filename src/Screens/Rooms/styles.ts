import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import theme from "../../theme";

interface FilterTextProps {
  isActive: boolean;
}

interface FilterProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ViewFilter = styled(View)`
  flex-direction: row;
  width: 95%;
  height: 65px;
  justify-content: space-around;
  margin-top: 20px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.MIDNIGHT_BLUE};
  border-width: 1;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER_DARK_BLUE};
`;

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};

  text-align: center;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    // paddingHorizontal: 20,
  },
})`
  flex: 1;
`;

export const FilterButton = styled(TouchableOpacity)<FilterProps>`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;

  overflow: hidden;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.DARK_BLUE : theme.COLORS.LIGHTER_DARK_BLUE};
`;

export const FilterText = styled(Text)<FilterTextProps>`
  font-size: 16px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.WHITE : theme.COLORS.MIDNIGHT_BLUE};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;

export const CreateButton = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  width: 55%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER_DARK_BLUE};
  margin: 5px;
`;

export const TitleCreate = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
`;
