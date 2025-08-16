import styled from "styled-components";
import { Text } from "../components/Text/Text";
import { Img } from "../components/Img/Img";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import mdnImg from "../assets/images/mdn.png";
import w3Img from "../assets/images/w3.png";
import freeCodeCampImg from "../assets/images/freecodecamp.png";
import railsImg from "../assets/images/rails.png";

const resources = [
  {
    title: "MDN Web Docs",
    image: mdnImg,
    summary:
      "Comprehensive documentation for HTML, CSS, JavaScript, and web APIs. An excellent resource for learning web development.",
    link: "https://developer.mozilla.org/en-US/",
  },
  {
    title: "W3Schools",
    image: w3Img,
    summary:
      "A beginner-friendly resource for learning web technologies. It provides tutorials and references for HTML, CSS, JavaScript, and more.",
    link: "https://www.w3schools.com/",
  },
  {
    title: "freeCodeCamp",
    image: freeCodeCampImg,
    summary:
      "A nonprofit organization that offers free coding tutorials and exercises. Great for hands-on learning.",
    link: "https://www.freecodecamp.org/",
  },
  {
    title: "Getting Started with Rails",
    image: railsImg,
    summary:
      "A comprehensive guide to getting started with Ruby on Rails, covering the basics of web development with Ruby and Rails.",
    link: "https://guides.rubyonrails.org/getting_started.html",
  },
];

const Container = styled.div`
  margin: 0 auto;
  padding: 6rem 2rem 2rem 2rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const InfoWrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
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

export const Resources = () => {
  return (
    <Container>
      <Header>
        <Title>Resources</Title>
        <Subtitle>Here are some helpful tools and documentation sites that supported my learning and development.</Subtitle>
      </Header>

      {resources.map((resource, index) => (
        <Card
          key={index}
          title={resource.title}
          content=""
          backgroundColor="#f4e9d4"
        >
          <FlexWrapper>
            <Img
              src={resource.image}
              alt={`${resource.title} icon`}
              style={{ width: "150px", height: "auto", objectFit: "contain" }}
            />
            <InfoWrapper>
              <Text content={resource.summary} />
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                <Button label="Visit Site" />
              </a>
            </InfoWrapper>
          </FlexWrapper>
        </Card>
      ))}
    </Container>
  );
};
