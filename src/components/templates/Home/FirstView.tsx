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
import { motion } from 'framer-motion';
import { upDown } from 'lib/variants';
import React, { VFC } from 'react';

const MotionArrowDownIcon = motion.custom(ArrowDownIcon);

const FirstView: VFC = () => (
  <>
    <Box align="center" pos="relative" overflow="hidden">
      <Sun />
      <Forest />
      <Box
        w="100%"
        h="200px"
        pos="absolute"
        top="45%"
        left="50%"
        transform="translate(-50%, -50%)"
        px={4}
      >
        <Heading as="h1" size="xl">
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

        <MotionArrowDownIcon w={8} h={8} animate="visible" variants={upDown} />
      </Box>
    </Box>
    <DarkModeBox
      bglight="#fff"
      bgdark="#000"
      fontWeight="bold"
      pt={[0, 0, 12]}
      pb={[40, 20]}
      px={4}
      display="flex"
      justifyContent="center"
      align="center"
      flexDirection={['column', 'column', 'row']}
    >
      <Text fontSize={['5xl']} mr={[0, 2]}>
        Welcome to
      </Text>
      <Text fontSize={['4xl', '5xl']}>MyPortfolio</Text>
    </DarkModeBox>
    <Wave filllight="#fff" filldark="#000" />
  </>
);

export default FirstView;
