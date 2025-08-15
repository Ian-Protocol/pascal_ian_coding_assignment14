import React from "react";
import styled from "styled-components";
import { Text } from "../components/Text/Text";

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

const Content = styled.div`
  font-size: 16pt;
  color: #444;
  line-height: 1.5;
`;

const ContentTitle = styled.h3`
  font-size: 18pt;
  color: #555;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const BasicInfo = () => {
  return (
    <Container>
      <Header>
        <Title>Ian Pascal</Title>
        <Subtitle>Full Stack Web Developer</Subtitle>
        <Text content="Do I need anything here?" />
      </Header>

      <Content>
        <ContentTitle>About Me</ContentTitle>
        <Text content="I have a passion for technology and solving problems with code. Computers are cool." />
      </Content>

      <Content>
        <ContentTitle>Interests</ContentTitle>
        <Text content="In my spare time, I enjoy hiking, exploring new technologies, playing video games and Magic: The Gathering, and working on personal projects - all of which are technological in nature." />
      </Content>

      <Content>
        <ContentTitle>Education</ContentTitle>
        <Text content="I (hopefully) have a diploma in Full Stack Web Development from Red River College Polytechnic." />
      </Content>
    </Container>
  );
};
