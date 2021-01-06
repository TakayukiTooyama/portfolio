import aspida from '@aspida/fetch';
import type { CommonList, Post } from 'types/post';

import api from '../../api/$api';

const url = 'https://takalab.microcms.io/api/v1';
const config = {
  headers: { 'X-API-KEY': '13e1b80d-bc4c-478f-8aa6-df0d2ae2759e' },
};

export const getAllPost = async (): Promise<CommonList<Post>> => {
  const apiClient = api(aspida(fetch, { baseURL: url }));

  // res が CommonList<Post> 型になっている
  return apiClient.posts.$get({ config });
};

export const getPostById = async (id: string): Promise<Post> => {
  const apiClient = api(aspida(fetch, { baseURL: url }));

  // res が Post 型になっている
  return apiClient.posts._contentId(id).$get({ config });
};
