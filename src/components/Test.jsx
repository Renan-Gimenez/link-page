import React from "react";
import styled from "styled-components";


const Title = styled.h1`
    color: red;
`;

export default function Test(props){
    return(
        <Title>
            {props.value}
        </Title>
    );
};