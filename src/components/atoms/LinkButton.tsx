import { Link, useColorModeValue } from '@chakra-ui/react';
import { BoxShadow } from 'components/atoms';
import React, { useState, FC } from 'react';

type Props = {
  href: string;
  maxW?: string;
  h?: string;
};

const LinkButton: FC<Props> = ({ href = '', maxW = '200px', h = '50px' }) => {
  const [boxStyle, setBoxStyle] = useState('');
  const onClick = () => {
    setBoxStyle('inner');
    setTimeout(() => {
      setBoxStyle('');
    }, 3000);
  };

  return (
    <BoxShadow
      bg={useColorModeValue('gray.100', 'gray.900')}
      borderRadius="30px"
      w="100%"
      boxStyle={boxStyle}
      maxW={maxW}
      cursor="pointer"
      h={h}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      lineHeight={h}
      textDecoration="none"
    >
      <Link
        isExternal
        href={href}
        display="block"
        borderRadius="30px"
        _hover={{ textDecoration: 'none' }}
      >
        Click
      </Link>
    </BoxShadow>
  );
};

export default LinkButton;
