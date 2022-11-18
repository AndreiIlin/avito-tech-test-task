import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border: 1px solid;
  border-radius: 4px;
  padding: 8px 14px;
  font-family: monospace;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: #eee;
  }
`;
