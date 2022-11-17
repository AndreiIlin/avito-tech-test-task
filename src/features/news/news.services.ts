import { hackerNewsApi } from '../../infrastructure/store/api';

const newsSlice = hackerNewsApi.injectEndpoints({
  endpoints: (builder) => ({
    getNewsIds: builder.query<number[], number>({
      query: (limit) => `newstories.json?print=pretty&orderBy="$key"&limitToFirst=${limit}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetNewsIdsQuery } = newsSlice;
