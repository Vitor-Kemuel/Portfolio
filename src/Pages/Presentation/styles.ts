import styled from 'styled-components';

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
export const About = styled.div`
    text-align: center;
    margin: 20px 10% 0;
    @media screen and (max-width: 760px){
        &{
            margin 20px 0 0;
        }
    }
`
export const Space = styled.div`
    height: 40px;
`
export const ArrowDown = styled.p`
    height: 100%;
    display: flex;
    align-items: end;
    font-size: 22px;
    color: #707070;
`