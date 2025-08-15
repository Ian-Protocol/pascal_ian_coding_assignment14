import React from "react";
import styled from "styled-components";
import { Text } from "../components/Text/Text";

const Container = styled.div`
  padding: 20px;
`;

export const Resources = () => {
  return (
    <Container>
      <Text content="Resources" />
      <Text content="Here you can find minerals & vespene gas." />
    </Container>
  );
}