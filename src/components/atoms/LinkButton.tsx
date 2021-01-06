import { Box, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import React, { VFC } from 'react';

type Props = {
  href: string;
  maxW?: string;
  h?: string;
};

const LinkButton: VFC<Props> = ({ href = '', maxW = '200px', h = '40px' }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const border = isDark ? '1px solid #30373D' : '';
  const bgColor = { light: 'black', dark: '#000' };

  return (
    <Link href={href}>
      <Box
        w="100%"
        maxW={maxW}
        h={h}
        lineHeight={h}
        borderRadius="30px"
        bg={bgColor[colorMode]}
        color="white"
        border={border}
        cursor="pointer"
        _hover={{ opacity: 0.8 }}
      >
        こちらをクリック
      </Box>
    </Link>
  );
};

export default LinkButton;
