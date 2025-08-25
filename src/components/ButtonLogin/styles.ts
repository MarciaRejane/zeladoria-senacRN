import theme from "../../theme/";
import styled from "styled-components/native";


export const ButtonContainer = styled.TouchableOpacity`
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.DARK_BLUE};
    padding: 20px;
    width: 307px;
    height: 58px;
    border-radius: 20px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: 16px;
  font-family: ${({theme}) => theme.FONT_FAMILY.MEDIUM};
`;