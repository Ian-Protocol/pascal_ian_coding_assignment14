import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ disabled?: boolean; backgroundColor?: string }>`
  max-width: 100%;
  height: auto;
  display: block;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  filter: ${({ disabled }) =>
    disabled ? "grayscale(100%) opacity(0.5)" : "none"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 4px;
  transition:
    filter 0.2s,
    background-color 0.2s;
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  disabled = false,
  backgroundColor = "transparent",
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      disabled={disabled}
      backgroundColor={backgroundColor}
    />
  );
};
