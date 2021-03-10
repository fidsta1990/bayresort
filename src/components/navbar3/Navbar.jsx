import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "./details";
import {
  Nav,
  Wrapper,
  NavHeader,
  ToggleButton,
  NavMenuWrapper,
  NavMenu,
  NavLink,
  SignUpBtn,
} from "./navbarStyle";


// more responsive

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleToggle = () => setClick(!click);

  return (
    <Nav>
      <Wrapper>
        {/* logo and menu bar */}
        <NavHeader>
          <NavLink to="/">
            <h2>Logo</h2>
          </NavLink>
          <ToggleButton onClick={handleToggle}>
            {click ? <FaTimes /> : <FaBars />}
          </ToggleButton>
        </NavHeader>

        {/* menu bar */}
        <NavMenuWrapper className={click ? "nav-menu active" : "nav-menu"}>
          <NavMenu>
            {links.map((link, idx) => {
              const { text, url } = link;
              return (
                <NavLink key={idx} to={url} className="links">
                  {text}
                </NavLink>
              );
            })}
          </NavMenu>
        </NavMenuWrapper>
        {/* sign up */}
        <SignUpBtn>Sign Up</SignUpBtn>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
