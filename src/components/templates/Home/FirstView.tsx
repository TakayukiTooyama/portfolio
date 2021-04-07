import { ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import {
  DarkModeBox,
  Forest,
  GithubIcon,
  Sun,
  TwitterIcon,
  Wave,
  ZennIcon,
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
        <Heading as="h1" size="2xl" mb={2}>
          Takayuki Tooyama
        </Heading>
        <Text
          fontSize={['lg', 'xl', '2xl']}
          mb={8}
          fontFamily={`'Capriola',"Helvetica Neue"`}
        >
          FrontEnd Enginner
        </Text>

        <HStack justify="center" spacing={4} mb={8}>
          <TwitterIcon />
          <GithubIcon />
          <ZennIcon />
        </HStack>

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
      alignItems="center"
      justifyContent="center"
      flexDirection={{ base: 'column', md: 'row' }}
      fontFamily={`'Capriola',"Helvetica Neue"`}
    >
      <Text fontSize={{ base: '4xl', md: '5xl' }} mr={[0, 2]}>
        Welcome to
      </Text>
      <Text fontSize={{ base: '3xl', md: '5xl' }}>MyPortfolio</Text>
    </DarkModeBox>
    <Wave filllight="#fff" filldark="#000" />
  </>
);

export default FirstView;
