import { DrawerBody as Body, Flex, Stack } from '@chakra-ui/react';
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from 'components/atoms';
import { DarkModeSwitch } from 'components/molecules';
import { Nav } from 'components/organisms';
import { useRouter } from 'next/router';
import React, { VFC } from 'react';

const DrawerBody: VFC = () => {
  const router = useRouter();
  const { pathname } = router;

  /* PostページはあえてsmoothScrollできないように */
  const isPosts = pathname.slice(1, 6);

  return (
    <Body pt={8}>
      <Stack spacing={12} align="center">
        {isPosts === 'posts' ? null : <Nav />}
        <Flex wrap="wrap" justify="center" w="80px">
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <GithubIcon />
        </Flex>
        <DarkModeSwitch />
      </Stack>
    </Body>
  );
};

export default DrawerBody;
