import { ChevronUpIcon } from '@chakra-ui/icons';
import { BoxShadow } from 'components/atoms';
import React, { useState, FC } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ButtonToTop: FC = () => {
  const [boxStyle, setBoxStyle] = useState('');
  const scrollToTop = () => {
    scroll.scrollToTop();
    setBoxStyle('inner');
    setTimeout(() => {
      setBoxStyle('');
    }, 3000);
  };
  return (
    <BoxShadow
      boxStyle={boxStyle}
      borderRadius="10px"
      onClick={scrollToTop}
      w="48px"
      h="48px"
      cursor="pointer"
    >
      <ChevronUpIcon w={12} h={12} />
    </BoxShadow>
  );
};

export default ButtonToTop;
