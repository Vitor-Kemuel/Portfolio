import styled from "styled-components"

export const Email = styled.a`
    font-size: 22px;
    color: #000;
    margin: 12px 0 15px;
`
export const IconContainer = styled.a`
    display:flex;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: #000;
    transition: .7s;
    &:hover{
        opacity: 0.6;
        cursor:pointer;
    }
`
export const Space = styled.div`
    height: 10vh;
`
export const Copyright = styled.p`
    font-size: 12px;
    color: #808080;
    height: 100%;
    display: flex;
    align-items: end;
`