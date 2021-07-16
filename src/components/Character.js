import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  background: ${(props) => props.theme.primaryColor};
  border: ${(props) => props.theme.black} solid 2px;
  margin: 2rem 25%;
  padding: 1rem 0;
  width: 50%;
  text-align: center;
`;

export default function Character(props) {
  const { name } = props;
  return <StyledCharacter>{name}</StyledCharacter>;
}
