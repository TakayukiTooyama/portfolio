import { CommonList, Post } from 'types/post';

// APIの型定義
export type Methods = {
  get: {
    resBody: CommonList<Post>;
  };
};
