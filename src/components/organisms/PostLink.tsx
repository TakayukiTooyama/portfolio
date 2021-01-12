import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { BoxShadow } from 'components/atoms';
import Link from 'next/link';
import React, { VFC } from 'react';

type Props = {
  nextSlug: string;
  prevSlug: string;
};

const PostLink: VFC<Props> = ({ nextSlug, prevSlug }) => (
  <BoxShadow px={8} py={4} borderRadius="10px">
    <Flex justify="space-between" align="center">
      <Flex align="center">
        <ArrowBackIcon />
        <Link href={prevSlug}>Prev</Link>
      </Flex>
      <Link href="/">Home</Link>
      <Flex align="center">
        <Link href={nextSlug}>Next</Link>
        <ArrowForwardIcon />
      </Flex>
    </Flex>
  </BoxShadow>
);

export default PostLink;
