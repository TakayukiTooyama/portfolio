// microCMS から返ってくるオブジェクトの共通プロパティ
export type CommonItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publushedAt: string;
  revisedAt: string;
};

// microCMS から返ってくるリスト
export type CommonList<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

// サンプル詳細の型
export type SampleDetail = {
  fieldId: string;
  alt: string;
  sampleImage: { url: string };
};

// 上記のCommonList<T>に入る型
export type Post = CommonItem & {
  title: string;
  slug: string;
  date: Date;
  period: number;
  languages: string;
  github: string;
  siteLink: string;
  nextSlug: string;
  prevSlug: string;
  mockup: { url: string };
  mainImage: { url: string };
  funcList: string;
  content: string;
  sampleDetails: SampleDetail[];
};

// APIの型定義
export type Methods = {
  get: {
    resBody: CommonList<Post>;
  };
};
