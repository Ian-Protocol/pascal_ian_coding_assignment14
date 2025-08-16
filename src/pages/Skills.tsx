import styled from "styled-components";
import { Card } from "../components/Card/Card";

const Container = styled.div`
  margin: 0 auto;
  padding: 6rem 2rem 2rem 2rem;
`;

const SectionHeading = styled.h4`
  margin: 10px 0 5px;
  font-size: 1.1rem;
  color: #333;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  color: #f4e9d4;
`;

const TechItem = styled.li`
  background: #5b4a68;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
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

const skills = {
  languages: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "PHP",
    "SQL",
    "Ruby on Rails",
    "Python",
    "Flask",
    "Java",
  ],
  tools: [
    "Git",
    "GitHub",
    "Docker",
    "Xampp",
    "VS Code",
    "VirtualBox",
    "ESLint",
    "Github Actions",
    "Prettier",
    "Linux & WSL",
    "Vite",
    "Node.js",
    "Storybook",
    "PostgreSQL",
  ],
};

export const Skills = () => {
  return (
    <Container>
      <Header>
        <Title>Skills</Title>
        <Subtitle>Throughout my studies I have learned about many technologies. Below are the programming languages, frameworks, and tools I’ve used in my development projects. I wish to continue learning as much as possible!</Subtitle>
      </Header>

      <Card title="" content="" backgroundColor="#f4e9d4">
        <SectionHeading>Languages & Frameworks</SectionHeading>
        <TechList>
          {skills.languages.map((item, index) => (
            <TechItem key={index}>{item}</TechItem>
          ))}
        </TechList>
      </Card>

      <Card title="" content="" backgroundColor="#f4e9d4">
        <SectionHeading>Development Tools</SectionHeading>
        <TechList>
          {skills.tools.map((item, index) => (
            <TechItem key={index}>{item}</TechItem>
          ))}
        </TechList>
      </Card>
    </Container>
  );
};
