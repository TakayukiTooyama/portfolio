import React, { VFC } from 'react';
import { DrawerBody as Body, Flex, Stack } from '@chakra-ui/react';
import {
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
} from 'react-icons/fa';

import { LinkIcon } from 'components/atoms';
import { Nav } from 'components/organisms';
import { DarkModeSwitch } from 'components/molecules';

const DrawerBody: VFC = () => {
  const snsLinks = [
    {
      href: 'https://twitter.com/tooyama107',
      icon: FaTwitterSquare,
      label: 'Twitter',
      color: '#1DA1F2',
    },
    {
      href: 'https://www.instagram.com/takayuki_tooyama',
      icon: FaInstagram,
      label: 'Instagram',
      color: '#CF2E92',
    },
    { href: '', icon: FaLinkedin, label: 'LinkedIn' },
    {
      href: 'https://github.com/TakayukiTooyama',
      icon: FaGithubSquare,
      label: 'Github',
      color: 'black',
    },
  ];
  return (
    <Body pt={8}>
      <Stack spacing={12} align="center">
        <Nav />
        <Flex wrap="wrap" justify="center" w="80px">
          {snsLinks.map((item) => (
            <LinkIcon
              key={item.label}
              href={item.href}
              icon={item.icon}
              motion={true}
              color={item.color}
            />
          ))}
        </Flex>
        <DarkModeSwitch />
      </Stack>
    </Body>
  );
};

export default DrawerBody;
