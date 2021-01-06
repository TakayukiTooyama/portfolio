import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, IconButton, Text } from '@chakra-ui/react';
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from 'components/atoms';
import React, { VFC } from 'react';

const FirstView: VFC = () => {
  const downScroll = () => {
    const height = window.innerHeight;
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    });
  };
  return (
    <Box align="center" h="89vh" pos="relative">
      <Box
        w="100%"
        pos="absolute"
        top="45%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Heading as="h1" size="2xl">
          Takayuki Tooyama
        </Heading>
        <Text fontSize="xl">Front Enginner</Text>
        <Box mb={4} />

        <HStack justify="center" spacing={4}>
          <TwitterIcon motion />
          <InstagramIcon motion />
          <LinkedInIcon motion />
          <GithubIcon motion />
        </HStack>
        <Box mb={8} />

        <IconButton
          aria-label="down-icon"
          isRound
          shadow="base"
          icon={<ChevronDownIcon w={8} h={8} />}
          onClick={downScroll}
        />
      </Box>
    </Box>
  );
};

export default FirstView;
