// import React, { useState } from 'react';
import { SelectNavigation } from '../../../types';
import { NavItem } from './style';
import { Link } from 'react-scroll';

const SelectNavigationItems = [
  {
    text: "Apresentação",
    locate: SelectNavigation.presentation,
  },
  {
    text: "Projetos",
    locate: SelectNavigation.projects
  },
  {
    text: "Contato",
    locate: SelectNavigation.contact
  },
];

export const Navigation: React.FC<{ onClick: () => void }>  = ({onClick}) => {

  const mappedItems = (
    SelectNavigationItems.map(({ locate, text }) => {
      return (
        <NavItem className="nav-item">
            <Link
                onClick={onClick}
                className="link"
                activeClass="active"
                to={locate}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                {text}
            </Link>
        </NavItem>
      );
    })
  );

  return (
    <>
        {mappedItems}
    </>
  );
};