import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const Label = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? "#999" : "#333")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  user-select: none;
  transition: background-color 0.2s;
`;

const StyledRadio = styled.input`
  cursor: pointer;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  disabled = false,
  backgroundColor = "transparent",
}) => {
  return (
    <Label disabled={disabled} backgroundColor={backgroundColor}>
      <StyledRadio type="radio" name={name} value={value} disabled={disabled} />
      {label}
    </Label>
  );
};
