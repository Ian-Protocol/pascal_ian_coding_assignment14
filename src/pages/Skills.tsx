import styled from "styled-components";
import { Card } from "../components/Card/Card";
import { Text } from "../components/Text/Text";

const Container = styled.div`
  padding: 20px;
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
`;

const TechItem = styled.li`
  background: #eee;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const skills = {
  languages: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "PHP", "SQL", "Ruby on Rails", "Python", "Flask", "Java"],
  tools: ["Git", "GitHub", "Docker", "Xampp", "VS Code", "VirtualBox", "ESLint", "Github Actions", "Prettier", "Linux & WSL", "Vite", "Node.js", "Storybook", "PostgreSQL"]
};

export const Skills = () => {
  return (
    <Container>
      <Text content="Skills" />
      <Text content="Throughout my studies I have learned about many technologies. Below are the programming languages, frameworks, and tools I’ve used in my development projects. I wish to continue learning as much as possible!" />

      <Card title="" content="">
        <SectionHeading>Languages & Frameworks</SectionHeading>
        <TechList>
          {skills.languages.map((item, index) => (
            <TechItem key={index}>{item}</TechItem>
          ))}
        </TechList>
      </Card>

      <Card title="" content="">
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
