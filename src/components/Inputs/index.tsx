import React from "react";
import { Container, Inputs } from "./styles";

export function Input({...rest}){
  return(
    <Container>
      <Inputs {...rest}/>
    </Container>
  )
}