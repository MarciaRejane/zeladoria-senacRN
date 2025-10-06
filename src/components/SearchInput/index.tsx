import React from "react";
import { Container, Inputs, IconWrapper } from "./styles";
import { TextInputProps } from "react-native";
import { MagnifyingGlassIcon } from "phosphor-react-native";


interface InputsProps extends TextInputProps { }
export function SearchInput({ ...rest }: InputsProps) {
  return (
    <Container>
      <IconWrapper>
        <MagnifyingGlassIcon size={30} color="#004a8d" />
      </IconWrapper>
      <Inputs {...rest} />
    </Container>
  )
}