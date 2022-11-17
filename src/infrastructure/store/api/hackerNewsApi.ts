import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hacker-news.firebaseio.com/v0/ ',
  }),
  endpoints: () => ({}),
});
