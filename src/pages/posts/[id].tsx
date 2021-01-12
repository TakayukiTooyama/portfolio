import { Layout, WorkPostDetail } from 'components/templates';
import { getAllPost, getPostById } from 'lib/postApi';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import ErrorPage from 'next/error';
import React, { VFC } from 'react';
import type { Post as PostType } from 'types/post';

type Props = {
  post: PostType;
};

type Params = {
  id: string;
};

const Post: VFC<Props> = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <WorkPostDetail post={post} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPost = await getAllPost();
  const paths = allPost.contents.map((post) => ({
    params: {
      id: post.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const params = context.params as Params;
  const { id } = params;
  const post = await getPostById(id);

  return { props: { post } };
};

export default Post;
