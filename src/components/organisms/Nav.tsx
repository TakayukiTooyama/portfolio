import { Stack } from '@chakra-ui/react';
import { LinkText } from 'components/atoms';
import MotionBox from 'components/atoms/MotionBox';
import React, { VFC } from 'react';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Nav: VFC = () => {
  const contents = [
    {
      name: 'Profile',
      link: 'profile',
    },
    {
      name: 'Skill',
      link: 'skill',
    },
    {
      name: 'Works',
      link: 'works',
    },
    {
      name: 'Contact',
      link: 'contact',
    },
  ];

  return (
    <Stack
      spacing={8}
      direction={['column', 'column', 'row']}
      textAlign="center"
    >
      {contents.map((item) => (
        <MotionBox
          key={item.name}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <LinkText name={item.name} link={item.link} />
        </MotionBox>
      ))}
    </Stack>
  );
};

export default Nav;
