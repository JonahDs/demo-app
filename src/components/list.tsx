import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
`;

type ListProps = {
  items: string[];
};

const List = ({ items }: ListProps) => {
  return (
    <StyledList>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </StyledList>
  );
};

export default List;
