import React from "react";
import { Container} from "./styles";
import { Header } from "../../components/Header";
import theme from "../../theme";

export  function Profile() {
    return(
        <Container>
            <Header 
             title="Profile"
            //   backButton={true} 
             />
            
        </Container>
    );
}