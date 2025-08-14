import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const StyledImage = styled.img<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  filter: ${({ disabled }) =>
    disabled ? "grayscale(100%) opacity(0.5)" : "none"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 8px;
  transition:
    filter 0.2s,
    background-color 0.2s;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  disabled = false,
  backgroundColor = "transparent",
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      disabled={disabled}
      backgroundColor={backgroundColor}
    />
  );
};
