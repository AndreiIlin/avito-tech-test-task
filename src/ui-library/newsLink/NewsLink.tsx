import styled from 'styled-components';

export const NewsLink = styled.a`
  display: inline-block;
  background: transparent;
  border: 1px solid #000;
  color: #000;
  border-radius: 4px;
  padding: 8px 14px;
  text-align: center;
  text-decoration: none;
  font-family: monospace;
  font-weight: 600;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: #eee;
  }
`;
