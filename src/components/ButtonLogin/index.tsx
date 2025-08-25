import React from "react";
import { ButtonContainer, ButtonText } from "./styles"; 
import { TouchableOpacityProps } from "react-native";

interface ButtonLoginProps extends TouchableOpacityProps {
  title: string;
}

export const ButtonLogin: React.FC<ButtonLoginProps> = ({title, ...rest}) => {
  return(

    <ButtonContainer {...rest}>

    <ButtonText>
      {title}
    </ButtonText>

  </ButtonContainer>
  )
}