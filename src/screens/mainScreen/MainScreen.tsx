import React, { FC, useState } from 'react';
import { NewsItem } from '../../features/news/components/newsItem';
import { useGetNewsIdsQuery } from '../../features/news/news.services';
import { ErrorMessage } from '../../ui-library/errorMessage';
import { NewsList } from '../../ui-library/newsList';
import { NewsLoadingButton } from '../../ui-library/newsLoadingButton';
import { RefreshButton } from '../../ui-library/refreshButton';
import { LoadingSpinner } from '../../ui-library/spinner/Spinner';
import { Wrapper } from '../../ui-library/wrapper';

export const MainScreen: FC = () => {
  const [limit, setLimit] = useState(20);

  const { data, isLoading, isError, refetch } = useGetNewsIdsQuery(limit, {
    refetchOnFocus: true,
    pollingInterval: 60000,
  });

  const handleChangeLimit = () => {
    if (limit < 100) {
      setLimit((limit) => limit + 20);
    }
  };

  return (
    <Wrapper>
      <RefreshButton onClick={refetch}>Refresh</RefreshButton>
      <NewsList>
        {isLoading && <LoadingSpinner />}
        {isError && <ErrorMessage>Oops something goes wrong! Please refresh the page</ErrorMessage>}
        {data && data.map((news, id) => <NewsItem key={news} newsId={news} order={id + 1} />)}
      </NewsList>
      {data && data.length < 100 && <NewsLoadingButton onClick={handleChangeLimit}>Load more</NewsLoadingButton>}
    </Wrapper>
  );
};
