import styled from "styled-components/native";
import theme from "../../theme";

interface RoomStatusProps {
  status: "Limpa" | "Limpeza Pendente";
}

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const RoomHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RoomName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.LIGHTER_DARK_BLUE};
`;

export const RoomStatus = styled.Text<RoomStatusProps>`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) =>
    props.status === "Limpa"
      ? theme.COLORS.TEAL_GREEN
      : theme.COLORS.VIBRANT_RED};
`;

export const DetailsContainer = styled.View`
  margin-top: 10px;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.MIDNIGHT_BLUE};
`;

export const DetailText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.LIGHTER_DARK_BLUE};
  margin-bottom: 5px;
`;

export const CleanButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  padding: 10px 15px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`;

export const CleanButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.VIBRANT_RED};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`;

export const DeleteButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  font-weight: bold;
`;
