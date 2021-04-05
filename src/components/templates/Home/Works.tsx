import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { DarkModeBox, SectionTitle } from 'components/atoms';
import Wave2 from 'components/atoms/boundary/Wave2';
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
    <Container maxW="4xl">
      <Element name="works">
        <SectionTitle title="Works" mb={6} />
        <SimpleGrid columns={[1, 2, 2, 3]} spacing={4}>
          {posts &&
            posts.map((post) => (
              <Box key={post.slug}>
                <Link href={`/posts/${post.id}`} passHref>
                  <Box
                    w="100%"
                    height="0"
                    pt="61.8%"
                    mb={4}
                    backgroundImage={`url(${post.mainImage.url})`}
                    backgroundPosition="center"
                    backgroundSize="cover"
                    transition="all 0.2s ease"
                    _hover={{
                      transform: 'scale(1.05)',
                      transition: 'all 0.4s ease',
                      shadow: '2xl',
                    }}
                    shadow="base"
                    cursor="pointer"
                  />
                </Link>
                <Text fontSize="xl" align="center" mb={4}>
                  {post.title}
                </Text>
              </Box>
            ))}
        </SimpleGrid>
      </Element>
    </Container>
    <Wave2 filllight="#374565" filldark="#1A212C" />
  </DarkModeBox>
);
export default Works;
