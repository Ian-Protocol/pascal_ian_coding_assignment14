import React from 'react';
import styled from 'styled-components';
import { Text } from '../components/Text/Text';

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 24pt;
  color: #333;
  margin-bottom: 15px;
`;

const Subtitle = styled.h2`
  font-size: 20pt;
  color: #666;
  margin-bottom: 15px;
`;

export const BasicInfo = () => {
  return (
    <Container>
      <Header>
        <Title>Ian Pascal</Title>
        <Subtitle>Full Stack Web Developer</Subtitle>
        <Text content="I like turtles." />
      </Header>
    </Container>
  );
};
