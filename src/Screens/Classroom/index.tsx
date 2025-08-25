import React from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";

export  function Classroom() {
    return(
        <Container>
            <Header title="Classroom" backButton={true}/>
            
        </Container>
    );
}