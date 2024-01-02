import React, { useState } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";

function Navbar(args) {

  return (
    <>
      <Nav className="Nav">
        <NavItem>
          <NavLink active href="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/albums">Albums</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts">Posts</NavLink>
        </NavItem>
      </Nav>
    </>
  );
}

export default Navbar;
