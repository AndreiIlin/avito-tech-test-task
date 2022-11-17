import React, { FC } from 'react';
import { useGetCommentByIdQuery } from '../../comment.services';

interface CommentProps {
  commentId: number;
}

export const Comment: FC<CommentProps> = ({ commentId }) => {
  const { data } = useGetCommentByIdQuery(commentId);

  return <div>{data?.text}</div>;
};
