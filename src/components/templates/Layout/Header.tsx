import React, { VFC } from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { Nav, NavDrawer } from 'components/organisms';
import { DarkModeSwitch } from 'components/molecules';

export const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box w="100%" pos="fixed" top="0px" zIndex="1" boxShadow="base">
        <Flex justify="space-between" align="center" py={2} px={4}>
          <Heading as="h1" size="lg">
            Takayuki Tooyama
          </Heading>

          {/* PC画面だけ表示 */}
          <Box display={['none', 'none', 'block']}>
            <Nav />
          </Box>

          {/* PC画面だけ表示 */}
          <Box display={['none', 'none', 'block']}>
            <DarkModeSwitch />
          </Box>

          {/* スマホ・タブレット画面だけ表示 */}
          <IconButton
            aria-label="menu"
            display={['block', 'block', 'none']}
            bg="none"
            onClick={onOpen}
          >
            <HamburgerIcon w={6} h={6} />
          </IconButton>
        </Flex>
      </Box>
      <NavDrawer isOpen={isOpen} onClose={onClose} />
      <Box mb={14} />
    </>
  );
};
