import { Link, Text } from '@chakra-ui/react';
import React, { VFC } from 'react';

type Props = {
  name: string;
  href: string;
  motion?: boolean;
  fontSize?: string;
};

const LinkText: VFC<Props> = ({ name, href, motion, fontSize = '20px' }) => {
  const scale = motion ? '1.2' : '1.0';
  return (
    <Link
      href={href}
      _hover={{
        transform: `scale(${scale})`,
        transition: 'all 0.4s ease-out',
      }}
    >
      <Text fontSize={fontSize}>{name}</Text>
    </Link>
  );
};

export default LinkText;
