import styled from "styled-components";
import { Text } from "../components/Text/Text";
import { Img } from "../components/Img/Img";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import magicShopImg from "../assets/images/magic-shop.png";
import deckBuilderImg from "../assets/images/deck-builder.png";

const Container = styled.div`
  padding: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Left align text */
  text-align: left;
  max-width: 600px;
  gap: 12px;
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

const projects = [
  {
    title: "Magic Shop",
    image: magicShopImg,
    description:
      "Magic Shop is a project showcasing HTML, CSS, and JavaScript. It features a responsive design as a mock-up of an e-commerce store selling Magic: The Gathering cards.",
    link: "https://ian-protocol.github.io/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Commander Deckbuilder",
    image: deckBuilderImg,
    description:
      "Commander Deckbuilder is a project showcasing PHP and CSS. It is a Content Management System (for the fictional Magic Shop business) for building Magic: The Gathering decks allowing users to create their own decks and leave comments. Features user validation and a responsive design.",
    link: "https://github.com/Ian-Protocol/Deckbuilder",
    tech: ["PHP", "CSS"],
  },
];

export const Work = () => {
  return (
    <Container>
      <Text content="Work" />
      <Text content="Here you can find my projects." />

      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          content=""
          backgroundColor="#d8d8d8"
        >
          <FlexWrapper>
            <ImageWrapper>
              <SectionHeading>Image</SectionHeading>
              <Img
                src={project.image}
                alt={`${project.title} preview`}
                style={{
                  width: "300px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </ImageWrapper>

            <InfoWrapper>
              <div>
                <SectionHeading>Title</SectionHeading>
                <Text content={project.title} />
              </div>

              <div>
                <SectionHeading>Description</SectionHeading>
                <Text content={project.description} />
              </div>

              <div>
                <SectionHeading>Link</SectionHeading>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button label="View Project" backgroundColor="#007bff" />
                </a>
              </div>

              <div>
                <SectionHeading>Technologies Used</SectionHeading>
                <TechList>
                  {project.tech.map((item, i) => (
                    <TechItem key={i}>{item}</TechItem>
                  ))}
                </TechList>
              </div>
            </InfoWrapper>
          </FlexWrapper>
        </Card>
      ))}
    </Container>
  );
};
