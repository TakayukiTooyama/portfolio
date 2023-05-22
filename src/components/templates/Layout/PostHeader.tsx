import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import { DarkModeSwitch } from 'components/molecules';
import Router from 'next/dist/client/router';
import React, { FC } from 'react';

const PostHeader: FC = () => (
  <Box position="absolute" w="100%" top="16px">
    <Flex px={4} justify="space-between">
      <ChevronLeftIcon
        w={8}
        h={8}
        onClick={() => Router.push('/')}
        cursor="pointer"
        transition="transform 0.3s"
        _hover={{ transform: 'Scale(1.5)', transition: 'transform 0.3s' }}
      />
      <DarkModeSwitch />
    </Flex>
  </Box>
);

export default PostHeader;
