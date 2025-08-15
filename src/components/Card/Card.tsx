import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#f0f0f0" : backgroundColor || "white"};
  color: ${({ disabled }) => (disabled ? "#999" : "#333")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  transition: background-color 0.2s;
  margin: 2rem 0;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Content = styled.p`
  margin: 0;
`;

export const Card: React.FC<CardProps & { children?: React.ReactNode }> = ({
  title,
  content,
  disabled = false,
  backgroundColor = "white",
  children,
}) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      <Content>{content}</Content>
      {children}
    </StyledCard>
  );
};
