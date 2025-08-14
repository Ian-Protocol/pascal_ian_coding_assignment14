import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{ disabled?: boolean; backgroundColor?: string }>`
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? "#999" : "#333")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#f0f0f0" : backgroundColor || "transparent"};
  padding: 0.5rem;
`;

export const Text: React.FC<TextProps> = ({
  content,
  disabled = false,
  backgroundColor = "transparent",
}) => {
  return (
    <StyledText disabled={disabled} backgroundColor={backgroundColor}>
      {content}
    </StyledText>
  );
};
