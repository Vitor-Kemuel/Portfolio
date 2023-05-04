import styled from "styled-components";

export const Container = styled.h2`
    font-size: 42px;
    font-weight: 400;
    color: #000;
    margin: 0 0 15px;
    border-bottom: solid 3px;
    padding: 0 20px 0 0;
    @media screen and (max-width: 500px){
        &{
            font-size: 35px;
            font-weight: 400;
        }
    }
`