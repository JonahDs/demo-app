import React from "react";
import styled from "styled-components";

export enum buttonColors {
  RED = "red",
  GREEN = "green",
  ORANGE = "orange",
}

const StyledButton = styled.button<{ $type: buttonColors }>`
  background-color: ${({ $type }) => $type};

  &:hover {
    background-color: brown;
  }
`;


type ButtonProps = {
  type: buttonColors;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <StyledButton $type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
