import styled from "styled-components"

export const PageContainer = styled.div`
    width: 100%; 
    min-height: 90vh;
    display: flex;
    justify-content: center;
    padding: 0px 40px 40px;
`
export const Title = styled.h2`
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
export const About = styled.p`
    font-size: 22px;
    color: #707070;
`
export const Email = styled.a`
    font-size: 22px;
    color: #000;
    margin: 12px 0 15px;
`
export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
`
export const Column = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
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
    width: 30px;
    height: 70%;
`
export const Copyright = styled.p`
    font-size: 12px;
    color: #808080;
    height: 100%;
    display: flex;
    align-items: end;
`