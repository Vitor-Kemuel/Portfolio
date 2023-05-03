import styled from 'styled-components';


export const PageContainer = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 60px 40px 40px;
`
export const Perfil = styled.img`
    border-radius: 70%;
    margin: 0 20px;
`
export const Name = styled.h2`
    font-size: 42px;
    font-weight: 400;
    color: #000;
    margin: 20px 0 15px;
    border-bottom: solid 3px;
    padding: 0 20px 0;
    @media screen and (max-width: 500px){
        &{
            font-size: 35px;
        }
    }
`
export const About = styled.p`
    font-size: 22px;
    text-align: center;
    color: #707070;
    margin: 20px 10% 0;
    @media screen and (max-width: 500px){
        &{
            margin 20px 0 0;
        }
    }
`
export const Column = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Space = styled.div`
    width: 30px;
    height: 15%;
`

export const Contact = styled.div`
    display: flex;
    padding: 10px 0 0 0;
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