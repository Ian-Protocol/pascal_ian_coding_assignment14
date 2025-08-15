import React from 'react';
import { Text } from '../components/Text/Text';
import styled from 'styled-components';

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

export const Nav = () => (
  <NavBar>
    <Text content="My Portfolio" />
    <NavLinks>
      <NavItem><a href="#basic-info">About</a></NavItem>
      <NavItem><a href="#work">Work</a></NavItem>
      <NavItem><a href="#skills">Skills</a></NavItem>
      <NavItem><a href="#resources">Resources</a></NavItem>
    </NavLinks>
  </NavBar>
);