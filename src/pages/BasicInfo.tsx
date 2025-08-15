import React from "react";
import styled from "styled-components";
import { Text } from "../components/Text/Text";
import { Card } from "../components/Card/Card";

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 24pt;
  background-color: #333;
  margin-bottom: 15px;
`;

// const Subtitle = styled.h2`
//   font-size: 20pt;
//   background-color: #666;
//   margin-bottom: 15px;
// `;

// const Content = styled.div`
//   font-size: 16pt;
//   background-color: #444;
//   line-height: 1.5;
//   padding-bottom: 15px;
// `;

// const ContentTitle = styled.h3`
//   font-size: 18pt;
//   background-color: #555;
//   margin-top: 10px;
//   margin-bottom: 10px;
// `;

export const BasicInfo = () => {
  return (
    <Container>
      <Header>
        <Title>Ian Pascal</Title>
        <Text content="Full Stack Web Developer" />
      </Header>

      <Card title="About Me" content="I have a passion for technology and solving problems with code. Computers are cool." />

      <Card title="Interests" content="In my spare time, I enjoy hiking, exploring new technologies, playing video games and Magic: The Gathering, and working on personal projects - all of which are technological in nature." />

      <Card title="Education" content="I (hopefully) have a diploma in Full Stack Web Development from Red River College Polytechnic." />
    </Container>
  );
};