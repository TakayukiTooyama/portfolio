import { ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
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
import React, { FC } from 'react';

const MotionArrowDownIcon = motion(ArrowDownIcon);

const FirstView: FC = () => (
  <>
    <Box  textAlign="center" pos="relative" overflow="hidden">
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
        <Heading as="h1" fontSize={['3xl', '4xl', '5xl']} mb={1}>
          Takayuki Tooyama
        </Heading>
        <Text
          fontSize={['lg', 'xl', 'xl']}
          mb={8}
          fontFamily={`'Capriola',"Helvetica Neue"`}
        >
          FrontEnd Engineer
        </Text>

        <HStack justifyContent="center" mb={8} spacing={4}>
          <TwitterIcon />
          <GithubIcon />
          {/* <ZennIcon /> */}
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
