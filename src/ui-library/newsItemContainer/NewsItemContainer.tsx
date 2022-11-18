import styled from 'styled-components';
import { FlexRow } from '../flexRow';

export const NewsItemContainer = styled(FlexRow)`
  flex-wrap: nowrap;
  flex-direction: row;
  border-bottom: 1px solid #bbb;
  padding: 20px 15px;
  cursor: pointer;
  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 375px) {
    padding: 15px 10px;
  }
`;
