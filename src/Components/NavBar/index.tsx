import { animateScroll as scroll } from "react-scroll";
import { BurguerMenu, NavContainer, Logo, Menu, NavContent } from "./style";
import { Navigation } from "./Navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <NavContainer className="nav" id="navbar" isOpen={isOpen}>
            <NavContent className="nav-content">
                <Logo
                    className="nav-logo"
                    onClick={scrollToTop}
                >{"<VK />"}</Logo>
                <BurguerMenu onClick={toggleMenu} isOpen={isOpen}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </BurguerMenu>
                <Menu isOpen={isOpen}>
                    <Navigation onClick={toggleMenu} />
                </Menu>
            </NavContent>
        </NavContainer>
    );
}