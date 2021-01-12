import { Box, Stack, useDisclosure } from '@chakra-ui/react';
import { DarkModeBox, HamburgerIcon } from 'components/atoms';
import { DarkModeSwitch } from 'components/molecules';
import { Nav, NavDrawer } from 'components/organisms';
import useScroll from 'hooks/useScroll';
import React, { VFC } from 'react';

const Header: VFC = () => {
  const { height } = useScroll();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <DarkModeBox
        bglight="none"
        bgdark="none"
        pos="fixed"
        top="10px"
        right="25px"
        zIndex="1"
      >
        <Stack
          spacing={8}
          align="center"
          direction={['column', 'column', 'row']}
          transform={`translateY(${height})`}
          transition="transform 0.3s linear"
        >
          {/* PC画面だけ表示 */}
          <Box display={['none', 'none', 'block']}>
            <Nav />
          </Box>

          {/* PC画面だけ表示 */}
          <Box display={['none', 'none', 'block']}>
            <DarkModeSwitch />
          </Box>
        </Stack>
        {/* スマホ・タブレットだけ表示 */}
        <HamburgerIcon onClick={onOpen} />
      </DarkModeBox>

      <NavDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
