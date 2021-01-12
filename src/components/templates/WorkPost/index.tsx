import {
  WorkPostContent,
  WorkPostLink,
  WorkPostSample,
  WorkPostSpecification,
  WorkPostTop,
} from 'components/templates';
import React, { VFC } from 'react';
import type { Post } from 'types/post';

type Props = {
  post: Post;
};

const WorkPostDetail: VFC<Props> = ({ post }) => (
  <>
    <WorkPostTop title={post.title} date={post.date} />
    <WorkPostSpecification
      title={post.title}
      mockup={post.mockup.url}
      languages={post.languages}
    />
    <WorkPostContent />
    <WorkPostSample sampleDetails={post.sampleDetails} />
    <WorkPostLink
      siteLink={post.siteLink}
      github={post.github}
      nextSlug={post.nextSlug}
      prevSlug={post.prevSlug}
    />
  </>
);

export default WorkPostDetail;
