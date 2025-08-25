import React from "react";
import { ButtonContainer, ButtonText } from "./styles"; 
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonHomeProps {
  title: string;
  icon: any;
  onPress: () => void;
}

export const ButtonHome: React.FC<ButtonHomeProps> = ({title, icon, onPress}) => {
  return(
    <ButtonContainer onPress={onPress}>
      <MaterialIcons
        name={icon}
        size={50}
        color={"#fff"}
      />
      <ButtonText>
        {title}
      </ButtonText>
      
    </ButtonContainer>
  )
}