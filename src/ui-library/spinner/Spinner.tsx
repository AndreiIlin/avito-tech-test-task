import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { FlexRow } from '../flexRow';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnersContainer = styled(FlexRow)`
  gap: 15px;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-left: 3px solid blue;
  border-radius: 50px;
  animation: ${rotate} 1s linear infinite;
  margin-top: 10px;
`;

export const LoadingSpinner: FC = () => (
  <SpinnersContainer>
    <Spinner />
    <Spinner />
    <Spinner />
  </SpinnersContainer>
);
