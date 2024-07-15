import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Yu Gothic UI';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #EEA734;
  border: none;
  border-radius: 8px;
  padding: 12px 24px; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background: #D48B29; 
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: #A6A6A6;
    cursor: not-allowed;
  }
`;

const Button = ({ children, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
