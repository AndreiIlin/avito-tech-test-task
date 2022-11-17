import { hackerNewsApi } from '../../infrastructure/store/api';
import { Comment } from './comments.entity';

export const commentsSlice = hackerNewsApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommentById: builder.query<Comment, number>({
      query: (commentId) => `item/${commentId}.json?print=pretty`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCommentByIdQuery } = commentsSlice;
