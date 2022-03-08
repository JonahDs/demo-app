import React from "react";
import styled from "styled-components";

export enum buttonColors {
  RED = "red",
  GREEN = "green",
  ORANGE = "orange",
}

const StyledButton = styled.button<{ $type: buttonColors }>`
  background-color: ${({ $type }) => $type};
`;

type ButtonProps = {
  value: string;
  type: buttonColors;
  onClick: () => void;
};

const Button = ({ type, value, onClick }: ButtonProps) => {
  return (
    <StyledButton $type={type} onClick={onClick}>
      {value}
    </StyledButton>
  );
};

export default Button;
