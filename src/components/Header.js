import React, { useContext, useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  const [hamburgerToggle, sethamburgerToggle] = useState(false);

  const toggleHambugerMenu = () => sethamburgerToggle(!hamburgerToggle);

  return (
    <Navbar className="header-shadow" color="dark" dark expand="md">
      <NavbarBrand
        tag={Link}
        to="/"
        className="text-uppercase text-white font-monospace fs-4"
      >
        GitFire 🔥
      </NavbarBrand>
      <NavbarText className="text-white ms-lg-5 ms-xl-5">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggleHambugerMenu} />
      <Collapse isOpen={hamburgerToggle} navbar>
        <Nav className="ms-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => {
                  context.setUser(null);
                }}
                className="text-white pointer"
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  SignIn
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
