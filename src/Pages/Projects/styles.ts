import styled from 'styled-components';

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
        }
    }
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
export const ArrowDown = styled.p`
    height: 100%;
    display: flex;
    align-items: end;
    font-size: 22px;
    color: #707070;
`