import { Stack } from '@chakra-ui/react';
import { FirstView, Layout, Profile, Skill, Works } from 'components/templates';
import { getAllPost } from 'lib/postApi';
import { GetStaticProps, NextPage } from 'next';
import type { CommonList, Post } from 'types/post';

type Props = {
  allPost: CommonList<Post>;
};

const Home: NextPage<Props> = ({ allPost }) => (
  <Layout>
    <Stack spacing={6}>
      <FirstView />
      <Profile />
      <Skill />
      <Works posts={allPost.contents} />
    </Stack>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPost = await getAllPost();

  return {
    props: { allPost },
  };
};

export default Home;
