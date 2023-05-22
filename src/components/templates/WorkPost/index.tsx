import {
  WorkPostContent,
  WorkPostLink,
  WorkPostTop,
} from 'components/templates';
import React, { FC } from 'react';
import type { Post } from 'types/post';

type Props = {
  post: Post;
};

const WorkPostDetail: FC<Props> = ({ post }) => (
  <>
    <WorkPostTop title={post.title} date={post.date} />
    <WorkPostContent
      title={post.title}
      mockup={post.mockup.url}
      languages={post.languages}
      content={post.content}
      funcList={post.funcList}
      sampleDetails={post.sampleDetails}
    />
    <WorkPostLink
      siteLink={post.siteLink}
      github={post.github}
      nextSlug={post.nextSlug}
      prevSlug={post.prevSlug}
    />
  </>
);

export default WorkPostDetail;
