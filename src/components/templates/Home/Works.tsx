import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { SectionTitle } from 'components/atoms';
import Link from 'next/link';
import React, { VFC } from 'react';
import { Element } from 'react-scroll';
import { Post } from 'types/post';

type Props = {
  posts: Post[];
};

const Works: VFC<Props> = ({ posts }) => (
  <Element name="works">
    <Box align="center" h="100vh">
      <SectionTitle title="Works" />
      <Flex
        direction={['column', 'row']}
        wrap="wrap"
        justify="center"
        align="center"
      >
        {posts &&
          posts.map((post) => (
            <Box key={post.slug} mx={2}>
              <Link href={`/posts/${post.id}`} passHref>
                <Image
                  w="100%"
                  maxW={['300px', '230px']}
                  h={['200px', '150px']}
                  object-fit="cover"
                  src={post.mainImage.url}
                  alt={post.title}
                  _hover={{
                    transform: 'scale(1.05)',
                    transition: 'all 0.4s ease',
                    shadow: '2xl',
                  }}
                  shadow="base"
                />
              </Link>
              <Box mb={4} />
              <Text fontSize="xl" align="center">
                {post.title}
              </Text>
              <Box mb={4} />
            </Box>
          ))}
      </Flex>
    </Box>
  </Element>
);
export default Works;
