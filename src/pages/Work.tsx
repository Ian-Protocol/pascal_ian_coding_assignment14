import React from "react";
import styled from "styled-components";
import { Text } from "../components/Text/Text";

const Container = styled.div`
  padding: 20px;
`;

export const Work = () => {
  return (
    <Container>
      <Text content="Work" />
      <Text content="Here you can find my projects." />
    </Container>
  );
};
