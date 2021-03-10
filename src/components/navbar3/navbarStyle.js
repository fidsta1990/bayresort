import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  min-height: 10vh;
  display: flex;

  h2 {
    color: #fff;
    color: #000;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 90vw;
  margin: auto;

  .nav-menu {
    transition: all 0.2s ease;
    height: 0;
    overflow: hidden;

    &.active {
      height: 15rem;
      background: black;
    }
  }

  /* nav link */
  .links {
    &:hover {
      padding-left: 1.6rem;
      color: cornflowerblue;
    }

    /* tablet/Desktop */
    @media (min-width: 768px) {
      &:hover {
        padding-left: 0;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 1200px;
    flex-direction: row;

    .nav-menu {
      height: auto;
    }
  }
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    width: 120px;
  }
`;

export const ToggleButton = styled.button`
  display: none;

  @media (max-width: 767px) {
    display: block;
    color: #fff;
    font-size: 1.6rem;
    background: 0;
    border: 0;
    cursor: pointer;
  }
`;

export const NavMenuWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: all 0.2s ease;
  background: transparent;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    width: 800px;
    margin: auto 2rem;
  }
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 1.6rem;
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    /* font-size: 1.6rem; */
    margin: 0 1.2rem;
    white-space: nowrap;

    &:hover {
      padding-left: 0;
    }
  }
`;

export const SignUpBtn = styled.button`
  color: #fff;
  background: cornflowerblue;
  padding: 10px 22px;
  white-space: nowrap;
  border: 0;
  box-shadow: 0 0 5px #fff;
  cursor: pointer;

  @media (max-width: 1028px) {
    display: none;
  }
`;
