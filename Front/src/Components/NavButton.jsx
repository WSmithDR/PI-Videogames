import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledButton } from "../Styles/NavButton";


const NavButton = ({ name, to }) => {
  const location = useLocation();
  const isCurrentRoute = location.pathname === to;

  return (
    <Link to={to}>
      <StyledButton active={isCurrentRoute}>{name}</StyledButton>
    </Link>
  );
};

export default NavButton;
