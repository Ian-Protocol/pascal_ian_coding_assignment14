import { Link, useLocation } from "react-router-dom";
import { Text } from "../Text/Text";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
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
      <Text content="My Portfolio" />
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
