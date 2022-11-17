import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentsList } from '../../features/comments/components/commentsList';
import { useGetNewsByIdQuery } from '../../features/news/news.services';
import { NewsItemDescription } from '../../ui-library/newsItemComponents';

export const NewsScreen: FC = () => {
  const { newId } = useParams();

  const navigate = useNavigate();

  const handleReturnButton = () => {
    navigate('/');
  };

  const { data } = useGetNewsByIdQuery(Number(newId));

  return (
    <>
      {data && (
        <>
          <button onClick={handleReturnButton}>Return to main page</button>
          <div>{data.title}</div>
          <div>{data.url}</div>
          <NewsItemDescription>{new Date(data.time * 1000).toLocaleString()}</NewsItemDescription>
          <div>{data.by}</div>
          <div>comments count: {data.descendants}</div>
          <CommentsList news={data} />
        </>
      )}
    </>
  );
};
