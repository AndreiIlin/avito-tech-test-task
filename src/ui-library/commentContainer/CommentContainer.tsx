import styled from 'styled-components';

interface CommentContainerProps {
  indent?: number;
}

export const CommentContainer = styled.div<CommentContainerProps>`
  border: 2px solid #337ab7;
  font-size: 16px;
  font-style: italic;
  margin: 16px 31px 41px ${(props) => (props.indent ? props.indent * 20 : 0)}px;
  padding: 16px 24px;
  position: relative;
  box-shadow: 15px 15px 0 0 #337ab7;
  overflow: hidden;
  text-overflow: ellipsis;
`;
