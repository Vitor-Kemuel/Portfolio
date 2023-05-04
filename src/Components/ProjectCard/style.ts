import styled from "styled-components"

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
export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
`
export const CardProject = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    border: solid 2px #000;
    border-radius: 10px;
    flex-direction: column;
    padding: 10px;
    @media screen and (max-width: 700px){
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