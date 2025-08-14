import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#f0f0f0" : backgroundColor || "white"};
`;

const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  background-color: #f4f4f4;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;

export const Table: React.FC<TableProps> = ({
  headers,
  rows,
  footer,
  disabled = false,
  backgroundColor = "white",
}) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <StyledTh key={idx}>{header}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <StyledTd key={cellIndex}>{cell}</StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          {footer.map((cell, idx) => (
            <StyledTd key={idx}>{cell}</StyledTd>
          ))}
        </tr>
      </tfoot>
    </StyledTable>
  );
};
