import styled from "styled-components";

export const Logo = styled.h3`
    font-size: 30px;
    font-weight: 400;
    color: #000;
    padding: 5px 10px;
`
export const Container = styled.nav`
    background-color: rgb(240, 240, 240);
    position: sticky;
    top: 0px;
    width: 100%;
    height: 10vh;
    z-index: 1000;
  
    @media (max-width: 768px) {
      align-items: flex-start;
    }
`
export const NavContent = styled.div`
    padding: 0rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`
export const NavItems = styled.ul`
    @media screen and (max-width: 760px){
        &{
            display: none;
        }
    }
`
export const BurguerMenu = styled.button<{ isOpen: boolean }>`
    display: none;
    flex-direction: column;
    cursor: pointer;
    font-size: 1.5rem;
    border: none;
    @media (max-width: 768px) {
        display: flex;
    }
`;
export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    transition: all 0.3s ease-out-in;
    background-color: rgb(240, 240, 240);
    top: 10vh;
    height: 90vh;
  }
`;