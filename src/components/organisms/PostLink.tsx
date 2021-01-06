import { Flex } from '@chakra-ui/react';
import { BoxShadow, DarkModeBox } from 'components/atoms';
import Link from 'next/link';
import React, { VFC } from 'react';

type Props = {
  nextSlug: string;
  prevSlug: string;
};

const PostLink: VFC<Props> = ({ nextSlug, prevSlug }) => (
  <BoxShadow>
    <DarkModeBox px={6} py={3} shadow="md" w="100%" bglight="white">
      <Flex justify="space-between" align="center">
        <Link href={prevSlug}>前へ</Link>
        <Link href="/">ホームへ</Link>
        <Link href={nextSlug}>次へ</Link>
      </Flex>
    </DarkModeBox>
  </BoxShadow>
);

export default PostLink;
