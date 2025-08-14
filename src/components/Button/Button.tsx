import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#999" : backgroundColor || "#007bff"};
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  transition:
    background-color 0.2s,
    opacity 0.2s;
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  backgroundColor = "#007bff",
}) => {
  return (
    <StyledButton disabled={disabled} backgroundColor={backgroundColor}>
      {label}
    </StyledButton>
  );
};
