import React, { VFC } from 'react';
import { Stack } from '@chakra-ui/react';

import { LinkText } from 'components/atoms';

export const Nav: VFC = () => {
  const contents = [
    {
      name: 'Profile',
      link: '/profile',
    },
    {
      name: 'Skill',
      link: '/skill',
    },
    {
      name: 'Works',
      link: '/works',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];
  return (
    <Stack spacing={8} align="center" direction={['column', 'column', 'row']}>
      {contents.map((item) => (
        <LinkText
          key={item.name}
          name={item.name}
          href={item.link}
          motion={true}
        />
      ))}
    </Stack>
  );
};