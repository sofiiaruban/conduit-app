
import { axiosBaseQuery } from '../../../core/axios-base-query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface BaseFeedParams {
  page: number;
}

export interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null;
  isPersonalFeed: boolean;
}
export interface FeedArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio?: any;
  image: string;
  following: boolean;
}
export interface FeedData {
  articles: FeedArticle[];
  articlesCount: number;
} 
export const feedApi = createApi({
    reducerPath: "feedApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://api.realworld.io/api/articles",
    }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
            query: () => ({
                url: "/articles",
                method: "get",
            })
        }) 
    })
})
export const { useGetGlobalFeedQuery } = feedApi;