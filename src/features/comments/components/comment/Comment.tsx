import parse from 'html-react-parser';
import React, { FC } from 'react';
import { CommentCite } from '../../../../ui-library/commentCite';
import { CommentContainer } from '../../../../ui-library/commentContainer';
import { useGetCommentByIdQuery } from '../../comment.services';

interface CommentProps {
  commentId: number;
  indent: number;
}

export const Comment: FC<CommentProps> = ({ commentId, indent }) => {
  const { data } = useGetCommentByIdQuery(commentId);

  return (
    <>
      {data && !data.deleted && (
        <>
          <CommentContainer indent={indent}>
            {data.text ? parse(data.text) : 'Comment was deleted'}
            <CommentCite>{data.by}</CommentCite>
          </CommentContainer>
          {data.kids && data.kids.map((commentId) => <Comment indent={indent + 1} key={commentId} commentId={commentId} />)}
        </>
      )}
    </>
  );
};
