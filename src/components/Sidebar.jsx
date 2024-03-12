import React from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav className="bg-light flex-column sidebar">
      <NavItem>
        <NavLink href="#">Dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Profile</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Contact Details</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Settings</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">FAQ</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Sidebar;
