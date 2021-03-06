import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Nav,
  Navbar as BsNavbar,
  NavbarToggler,
  NavItem,
  NavLink as BsNavlink,
} from 'reactstrap';
import { isAuthenticated, logout } from '../redux/actions/AuthUser.actions';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const authenticated = useSelector((state) => state.AuthUser.authenticated);

  const dispatch = useDispatch();

  const renderNavbarLinks = () => {
    return !authenticated ? (
      <>
        {' '}
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
      </>
    ) : (
      <>
        <NavItem>
          <BsNavlink>
            <Link to="/createRecipe">Create Recipe</Link>
          </BsNavlink>
        </NavItem>
        <NavItem
          onClick={() => {
            localStorage.removeItem('token');
            dispatch(isAuthenticated());
            dispatch(logout());
          }}
        >
          <BsNavlink>Logout</BsNavlink>
        </NavItem>
      </>
    );
  };

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
          {renderNavbarLinks()}
        </Nav>
      </Collapse>
    </BsNavbar>
  );
};

export default Navbar;
