import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { hackerNewsApi } from './api';

export const store = configureStore({
  reducer: {
    [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hackerNewsApi.middleware),
});

setupListeners(store.dispatch);
