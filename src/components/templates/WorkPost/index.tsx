import { Box, Stack } from '@chakra-ui/react';
import { SectionTitle } from 'components/atoms';
import { LinkCard } from 'components/molecules';
import { PostLink } from 'components/organisms';
import {
  WorkPostContent,
  WorkPostDemo,
  WorkPostTop,
} from 'components/templates';
import React, { VFC } from 'react';
import type { Post } from 'types/post';

type Props = {
  post: Post;
};

const WorkPostDetail: VFC<Props> = ({ post }) => (
  <Box mx="auto" w="100%" maxW="xl">
    <Stack spacing={8}>
      <WorkPostTop
        title={post.title}
        languages={post.languages}
        mockup={post.mockup.url}
      />
      <WorkPostContent />
      <WorkPostDemo sampleDetails={post.sampleDetails} />
    </Stack>
    <SectionTitle title="Link" pl={3} />
    <Box mb={4} />
    <Stack spacing={4}>
      <LinkCard name="Demo" href={post.siteLink} />
      <LinkCard name="GitHub Repository" href={post.github} />
    </Stack>
    <Box mb={8} />
    <PostLink nextSlug={post.nextSlug} prevSlug={post.prevSlug} />
  </Box>
);

export default WorkPostDetail;
