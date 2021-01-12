import { ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import {
  DarkModeBox,
  Forest,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  Sun,
  TwitterIcon,
  Wave,
} from 'components/atoms';
import React, { VFC } from 'react';

const FirstView: VFC = () => (
  <>
    <Box align="center" pos="relative">
      <Sun />
      <Forest />
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

        <ArrowDownIcon w={8} h={8} />
      </Box>
    </Box>
    <DarkModeBox
      h="400px"
      bglight="white"
      bgdark="#000"
      textAlign="center"
      lineHeight="350px"
    >
      <Text fontSize={['2xl', '3xl', '4xl']}>Welcome to My Portfolio</Text>
    </DarkModeBox>
    <Wave filllight="#fff" filldark="#000" />
  </>
);

export default FirstView;
