import React, { useState, useEffect } from "react";
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

const Navbar = () => {
  //mobile menu show and hide state
  const [click, setClick] = useState(false);
  //navbar show and hide on scroll state
  const [navbar, setNavbar] = useState(false);
  // toggle nav on mobile view
  const handleToggle = () => setClick(!click);

  // show background on scrolling of navbar

  useEffect(() => {
    const showNav = () => {
   
      if (window.scrollY >= 300) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", showNav);

    return () => window.removeEventListener("scroll", showNav);
  }, []);

  return (
    <Nav className={navbar ? "navbar onActive" : "navbar"}>
      <Wrapper>
        {/* logo and menu bar */}
        <NavHeader>
          <NavLink to="/">
            <h2>BayResort</h2>
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
        <SignUpBtn>Booking</SignUpBtn>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
