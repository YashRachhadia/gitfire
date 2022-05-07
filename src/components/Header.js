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
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const Header = () => {
  const context = useContext(UserContext);
  const [hamburgerToggle, sethamburgerToggle] = useState(false);

  const toggleHambugerMenu = () => sethamburgerToggle(!hamburgerToggle);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        context.setUser(null);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

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
              <NavLink onClick={logOut} className="text-white pointer">
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
