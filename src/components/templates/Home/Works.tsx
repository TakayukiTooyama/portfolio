import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Border, DarkModeBox, SectionTitle } from 'components/atoms';
import { Container } from 'components/templates';
import Link from 'next/link';
import React, { VFC } from 'react';
import { Element } from 'react-scroll';
import { Post } from 'types/post';

type Props = {
  posts: Post[];
};

const Works: VFC<Props> = ({ posts }) => (
  <DarkModeBox bglight="gray.100">
    <Container>
      <Element name="works">
        <SectionTitle title="Works" mb={6} />
        <Flex
          direction={['column', 'row']}
          wrap="wrap"
          justify="center"
          align="center"
        >
          {posts &&
            posts.map((post) => (
              <Box key={post.slug} mx={3}>
                <Link href={`/posts/${post.id}`} passHref>
                  <Image
                    w="100%"
                    h={['200px', '150px']}
                    maxW={['300px', '230px']}
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
      </Element>
    </Container>
    <Border />
  </DarkModeBox>
);
export default Works;
