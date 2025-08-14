import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  padding: 0.5rem;
  font-size: 1rem;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#f0f0f0" : backgroundColor || "white"};
  color: ${({ disabled }) => (disabled ? "#999" : "#333")};
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  backgroundColor = "white",
}) => {
  return (
    <StyledSelect disabled={disabled} backgroundColor={backgroundColor}>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
