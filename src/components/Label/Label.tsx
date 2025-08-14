import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  display: inline-block;
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? "#999" : "#333")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  transition: background-color 0.2s;
`;

export const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  backgroundColor = "transparent",
}) => {
  return (
    <StyledLabel disabled={disabled} backgroundColor={backgroundColor}>
      {text}
    </StyledLabel>
  );
};
