import React, { FC, useState } from 'react';
import { useGetNewsIdsQuery } from '../../features/news/news.services';

export const MainScreen: FC = () => {
  const [limit, setLimit] = useState(20);

  const { data } = useGetNewsIdsQuery(limit);

  const handleChangeLimit = () => {
    if (limit < 100) {
      setLimit((limit) => limit + 20);
    }
  };

  return (
    <div>
      Main
      {data}
      <button onClick={handleChangeLimit}>Load more</button>
    </div>
  );
};
