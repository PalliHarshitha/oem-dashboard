import React from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Nav className="bg-dark justify-content-between navbar">
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Product</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">FLCPs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Dispatch</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">FMEA</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
