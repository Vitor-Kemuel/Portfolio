import { animateScroll as scroll } from "react-scroll";
import { BurguerMenu, Container, Logo, Menu, NavContent } from "./style";
import { Navigation } from "./navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <Container className="nav" id="navbar">
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
        </Container>
    );
}

export default NavBar;