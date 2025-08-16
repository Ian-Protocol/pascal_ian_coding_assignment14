import { Link, useLocation } from "react-router-dom";
import { Text } from "../Text/Text";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;
  background-color: #5b4a68;

  height: 64px;
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
  color: #f4e9d4;
  text-decoration: none;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  &:hover {
    text-decoration: underline;
  }
`;

export const Nav = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Basic Info" },
    { path: "/work", label: "Work" },
    { path: "/skills", label: "Skills" },
    { path: "/resources", label: "Resources" },
  ];

  return (
    <NavBar>
      <Text content="Ian Pascal - Portfolio" color="#f4e9d4" />
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
