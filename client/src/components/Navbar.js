import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Nav,
  Navbar as BsNavbar,
  NavbarToggler,
  NavItem,
  NavLink as BsNavlink,
} from "reactstrap";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <BsNavbar color="light" light expand="md">
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <BsNavlink>
              <Link to="/">Home</Link>
            </BsNavlink>
          </NavItem>
          <NavItem>
            <BsNavlink>
              <Link to="/signin">Sign In</Link>
            </BsNavlink>
          </NavItem>
          <NavItem>
            <BsNavlink>
              <Link to="/signup">Sign Up</Link>
            </BsNavlink>
          </NavItem>
        </Nav>
      </Collapse>
    </BsNavbar>
  );
};

export default Navbar;
