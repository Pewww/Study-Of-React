import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid gray;
  display: inline-block;
  padding: 1rem;
  border-radius: 4px;
  font-size: ${ props => props.fontSize };
  ${ props => props.big && `
    cursor: pointer;
  ` }
  &:hover {
    background-color: #202020;
    color: white;
  }
`;

const StyledButton = ({ children, big, ...rest }) => {
  return (
    <Wrapper { ...rest } big={ big }>
      { children }
    </Wrapper>
  );
};

export default StyledButton;