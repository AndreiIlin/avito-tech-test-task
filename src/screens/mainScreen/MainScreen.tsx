import React, { FC, useState } from 'react';
import { NewsItem } from '../../features/news/components/newsItem';
import { useGetNewsIdsQuery } from '../../features/news/news.services';
import { NewsList } from '../../ui-library/newsList';

export const MainScreen: FC = () => {
  const [limit, setLimit] = useState(20);

  const { data, refetch } = useGetNewsIdsQuery(limit, {
    refetchOnFocus: true,
    pollingInterval: 60000,
  });

  const handleChangeLimit = () => {
    if (limit < 100) {
      setLimit((limit) => limit + 20);
    }
  };

  return (
    <NewsList>
      <button onClick={refetch}>Refresh</button>
      {data && data.map((news) => <NewsItem key={news} newsId={news} />)}
      <button onClick={handleChangeLimit}>Load more</button>
    </NewsList>
  );
};
