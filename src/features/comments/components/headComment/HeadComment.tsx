import parse from 'html-react-parser';
import React, { FC, useState } from 'react';
import { CommentCite } from '../../../../ui-library/commentCite';
import { CommentContainer } from '../../../../ui-library/commentContainer';
import { CommentsButton } from '../../../../ui-library/commentsButton';
import { useGetCommentByIdQuery } from '../../comment.services';
import { Comment } from '../comment';

interface HeadCommentProps {
  commentId: number;
}

export const HeadComment: FC<HeadCommentProps> = ({ commentId }) => {
  const { data } = useGetCommentByIdQuery(commentId);

  const [isOpenedKids, setIsOpenedKids] = useState(false);

  const handleOpenComments = () => {
    setIsOpenedKids(true);
  };

  return (
    <>
      {data && !data.deleted && (
        <>
          <CommentContainer>
            {data.text ? parse(data.text) : 'Comment was deleted'}
            <CommentCite>{data.by}</CommentCite>
            {data.kids && !isOpenedKids && <CommentsButton onClick={handleOpenComments}>See comments branch</CommentsButton>}
          </CommentContainer>
          {isOpenedKids && data.kids?.map((commentId) => <Comment key={commentId} commentId={commentId} indent={1} />)}
        </>
      )}
    </>
  );
};
