import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{ disabled?: boolean; backgroundColor?: string; color?: string }>`
  font-size: 1rem;
  color: ${({ color, disabled }) => (disabled ? "#999" : color || "#333")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#f0f0f0" : backgroundColor || "transparent"};
  padding: 0.5rem;
`;

export const Text: React.FC<TextProps & { color?: string }> = ({
  content,
  disabled = false,
  backgroundColor = "transparent",
  color,
}) => {
  return (
    <StyledText disabled={disabled} backgroundColor={backgroundColor} color={color}>
      {content}
    </StyledText>
  );
};
