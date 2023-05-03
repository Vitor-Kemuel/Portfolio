import styled from 'styled-components';


export const PageContainer = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 40px 40px 40px;
`
export const Title = styled.h2`
    font-size: 42px;
    font-weight: 400;
    color: #000;
    margin: 0 0 15px;
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
    color: #707070;
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
export const Space = styled.div`
    width: 30px;
    height: 50px;
`
export const RowCards = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 0 50px;
    @media screen and (max-width: 700px){
        &{
            margin: 0;
            flex-direction: column;
        }
    }
`
export const CardProject = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    border: solid 2px #000;
    border-radius: 10px;
    flex-direction: column;
    padding: 10px;
    @media screen and (max-width: 500px){
        &{
            width: 100%;
            margin: 0 0 15px 0;
        }
    }
`
export const CardTitle = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: .9rem;
    font-weight: bold;
    color: blue;
    margin: 0 0 5px 0;
    &:hover{
        text-decoration: underline;
    }
`
export const CardIcon = styled.a`
    display: flex;
    align-items: center;
    font-size: .9rem;
    font-weight: bold;
    color: #000;
    margin: 0 0 5px 0;
`
export const CardDescription = styled.p`
    font-size: .8rem;
`
