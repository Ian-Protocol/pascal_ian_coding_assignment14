import styled from "styled-components";
// import { Text } from "../components/Text/Text";
import { Card } from "../components/Card/Card";

const Container = styled.div`
  margin: 0 auto;
  padding: 6rem 2rem 2rem 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #b9d4b4;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #6aae9d;
  margin-bottom: 2rem;
`;

export const BasicInfo = () => {
  return (
    <Container>
      <Header>
        <Title>Ian Pascal</Title>
        <Subtitle>Full Stack Web Developer</Subtitle>
      </Header>

      <Card
        title="About Me"
        content="I have a passion for technology and solving problems with code. Computers are cool."
        backgroundColor="#f4e9d4"
      />

      <Card
        title="Interests"
        content="In my spare time, I enjoy hiking, exploring new technologies, playing video games and Magic: The Gathering, and working on personal projects - all of which are technological in nature."
        backgroundColor="#f4e9d4"
      />

      <Card
        title="Education"
        content="I (hopefully) have a diploma in Full Stack Web Development from Red River College Polytechnic."
        backgroundColor="#f4e9d4"
      />
    </Container>
  );
};
