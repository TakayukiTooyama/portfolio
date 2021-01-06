import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { DarkModeBox } from 'components/atoms';
import { DarkModeSwitch } from 'components/molecules';
import { Nav, NavDrawer } from 'components/organisms';
import useScroll from 'hooks/useScroll';
import { useRouter } from 'next/router';
import React, { VFC } from 'react';

const Header: VFC = () => {
  const router = useRouter();
  const { height } = useScroll();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <DarkModeBox
        bglight="white"
        w="100%"
        pos="fixed"
        top="0px"
        zIndex="1"
        boxShadow="base"
        transform={`translateY(${height})`}
        transition="transform 0.1s linear"
      >
        <Flex justify="space-between" align="center" py={[2, 2, 4]} px={4}>
          <Heading
            as="h1"
            size="lg"
            cursor="pointer"
            onClick={() => router.push('/')}
          >
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
      </DarkModeBox>

      <NavDrawer isOpen={isOpen} onClose={onClose} />
      <DarkModeBox pb={14} />
    </>
  );
};

export default Header;
