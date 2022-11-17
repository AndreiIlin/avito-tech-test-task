import React, { FC } from 'react';
import { News } from '../../../news/news.entity';
import { Comment } from '../comment';

interface CommentsListProps {
  news: News;
}

export const CommentsList: FC<CommentsListProps> = ({ news }) => {
  return <div>{news.kids ? news.kids.map((comment) => <Comment key={comment} commentId={comment} />) : <p>No comments yet</p>}</div>;
};
