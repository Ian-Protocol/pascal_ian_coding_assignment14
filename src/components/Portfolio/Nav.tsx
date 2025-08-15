import { Link, useLocation } from "react-router-dom";
import { Text } from "../Text/Text";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin-left: auto;
  margin-right: 4rem;
`;

const NavItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  color: white;
  text-decoration: none;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  &:hover {
    text-decoration: underline;
  }
`;

export const Nav = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "About" },
    { path: "/work", label: "Work" },
    { path: "/skills", label: "Skills" },
    { path: "/resources", label: "Resources" },
  ];

  return (
    <NavBar>
      <Text content="Ian Pascal - Portfolio" color="white" />
      <NavLinks>
        {navItems.map((item) => (
          <NavItem key={item.path}>
            <NavLink to={item.path} active={location.pathname === item.path}>
              {item.label}
            </NavLink>
          </NavItem>
        ))}
      </NavLinks>
    </NavBar>
  );
};
