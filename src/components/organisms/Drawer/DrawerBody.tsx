import { DrawerBody as Body, Flex, Stack } from '@chakra-ui/react';
import { GithubIcon, TwitterIcon, ZennIcon } from 'components/atoms';
import { DarkModeSwitch } from 'components/molecules';
import { Nav } from 'components/organisms';
import React, { VFC } from 'react';

const DrawerBody: VFC = () => (
  <Body pt={8}>
    <Stack spacing={12} align="center">
      <Nav />
      <Flex wrap="wrap" justify="center" w="80px">
        <TwitterIcon />
        <GithubIcon />
        <ZennIcon />
      </Flex>
      <DarkModeSwitch />
    </Stack>
  </Body>
);

export default DrawerBody;
