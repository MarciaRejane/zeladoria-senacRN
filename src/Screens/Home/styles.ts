import styled from "styled-components/native";
import { Animated, TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const AnimatedHeader = styled(Animated.View)`
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Logo = styled.Image`
  width: 360px;
  height: 360px;
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
