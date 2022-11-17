import { hackerNewsApi } from '../../infrastructure/store/api';
import { News } from './news.entity';

const newsSlice = hackerNewsApi.injectEndpoints({
  endpoints: (builder) => ({
    getNewsIds: builder.query<number[], number>({
      query: (limit) => `newstories.json?print=pretty&orderBy="$key"&limitToFirst=${limit}`,
    }),
    getNewsById: builder.query<News, number>({
      query: (newsId) => `item/${newsId}.json?print=pretty`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetNewsIdsQuery, useGetNewsByIdQuery } = newsSlice;
