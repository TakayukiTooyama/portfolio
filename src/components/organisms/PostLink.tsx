import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, HStack } from '@chakra-ui/react';
import { BoxShadow } from 'components/atoms';
import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  nextSlug: string;
  prevSlug: string;
};

const PostLink: FC<Props> = ({ nextSlug, prevSlug }) => (
  <BoxShadow px={8} py={4} borderRadius="10px">
    <Flex justify="space-between" align="center">
      <HStack spacing={1} align="center">
        <ArrowBackIcon />
        <Link href={prevSlug}>Prev</Link>
      </HStack>
      <Link href="/">Home</Link>
      <HStack spacing={1} align="center">
        <Link href={nextSlug}>Next</Link>
        <ArrowForwardIcon />
      </HStack>
    </Flex>
  </BoxShadow>
);

export default PostLink;
