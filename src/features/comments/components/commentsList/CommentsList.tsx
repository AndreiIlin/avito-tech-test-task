import React, { FC } from 'react';
import { News } from '../../../news/news.entity';
import { HeadComment } from '../headComment';

interface CommentsListProps {
  news: News;
}

export const CommentsList: FC<CommentsListProps> = ({ news }) => {
  return (
    <div>
      <h2>Comments:</h2>
      {news.kids ? news.kids.map((comment) => <HeadComment key={comment} commentId={comment} />) : <p>Has no comments yet</p>}
    </div>
  );
};
