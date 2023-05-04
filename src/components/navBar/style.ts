import styled from "styled-components";

export const Logo = styled.h3`
    font-size: 30px;
    font-weight: 400;
    color: #000;
    padding: 5px 10px;
`
export const Container = styled.nav<{ isOpen: boolean }>`
    background-color: ${({ isOpen }) => (isOpen ? "rgb(240, 240, 240)" : "rgba(240, 240, 240, 0)")};
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
export const Menu = styled.ul<{ isOpen: boolean }>`
    display: flex;
    justify-content: flex-start;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 768px) {
        transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
        flex-direction: column;
        align-items: center;
        position: absolute;
        left: 0;
        right: ${({ isOpen }) => (isOpen ? "0" : "100%")}; // aqui mudamos de left para right
        width: 100%;
        background-color: rgb(240, 240, 240);
        top: 10vh;
        height: 90vh;
    }
`;

