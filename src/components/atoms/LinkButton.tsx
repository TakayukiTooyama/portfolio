// import { Box, useColorMode } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import React, { VFC } from 'react';

import { BoxShadow } from '.';

type Props = {
  href: string;
  maxW?: string;
  h?: string;
};

const LinkButton: VFC<Props> = ({ href = '', maxW = '200px', h = '50px' }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.900' };
  return (
    <Link href={href} passHref>
      <BoxShadow
        w="100%"
        maxW={maxW}
        h={h}
        lineHeight={h}
        borderRadius="30px"
        bg={bgColor[colorMode]}
        cursor="pointer"
        _hover={{ opacity: 0.8 }}
      >
        Click
      </BoxShadow>
    </Link>
  );
};

export default LinkButton;
