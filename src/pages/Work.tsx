import React from "react";
import styled from "styled-components";
import { Text } from "../components/Text/Text";
import { Img } from "../components/Img/Img";
import { Card } from "../components/Card/Card";
import magicShopImg from "../assets/images/magic-shop.png"; 

const Container = styled.div`
  padding: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const InfoText = styled.div`
  max-width: 400px;
`;

const projects = [
  {
    title: "Magic Shop",
    content:
      "Magic Shop is a project showcasing HTML, CSS, and JavaScript. It features a responsive design as a mock-up of an e-commerce store selling Magic: The Gathering cards.",
    image: magicShopImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const Work = () => {
  return (
    <Container>
      <Text content="Work" />
      <Text content="Here you can find my projects." />

      {projects.map((project, index) => (
        <Card key={index} title={project.title} content={project.content}>
        <FlexWrapper>
            <Img
            src={project.image}
            alt={`${project.title} preview`}
            style={{ width: "300px", height: "auto", objectFit: "contain" }}
            />
            <InfoText>
            <Text content={`Technologies Used: ${project.tech.join(", ")}`} />
            </InfoText>
        </FlexWrapper>
        </Card>
    ))}
    </Container>
  );
};
