import styled from 'styled-components';

export const ButtonsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;
