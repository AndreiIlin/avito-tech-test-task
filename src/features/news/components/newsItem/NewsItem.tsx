import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewsItemContainer, NewsItemDescription, NewsItemTitle } from '../../../../ui-library/newsItemComponents';
import { useGetNewsByIdQuery } from '../../news.services';

interface NewsItemProps {
  newsId: number;
}

export const NewsItem: FC<NewsItemProps> = ({ newsId }) => {
  const { data } = useGetNewsByIdQuery(newsId);

  const navigate = useNavigate();

  const handleNavigateToNews = () => {
    if (data) {
      navigate(`/${data.id}`);
    }
  };

  return (
    <>
      {data && (
        <NewsItemContainer onClick={handleNavigateToNews}>
          <NewsItemTitle>{data.title}</NewsItemTitle>
          <NewsItemDescription>score: {data.score}</NewsItemDescription>
          <NewsItemDescription>author: {data.by}</NewsItemDescription>
          <NewsItemDescription>comments count: {data.descendants}</NewsItemDescription>
          <NewsItemDescription>{new Date(data.time * 1000).toLocaleString()}</NewsItemDescription>
        </NewsItemContainer>
      )}
    </>
  );
};
