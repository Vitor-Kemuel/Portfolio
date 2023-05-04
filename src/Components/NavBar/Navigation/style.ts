import styled from "styled-components"

export const NavItem = styled.li`
    display: inline;
    height: 40px;
    color: #333;
    border-radius: 5px;
    padding: 5px 10px;
    &:hover{
        color: black;
        cursor: pointer;
    }
    & .link{
        padding: 5px 10px;
    }
    & .active{
        border-bottom: 2px solid #333;
    }
`
