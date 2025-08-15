import React from "react";
import styled from "styled-components";
import { Text } from "../components/Text/Text";

const Container = styled.div`
  padding: 20px;
`;

export const Skills = () => {
  return (
    <Container>
      <Text content="Skills" />
      <Text content="Here you can find my skills." />
    </Container>
  );
};
