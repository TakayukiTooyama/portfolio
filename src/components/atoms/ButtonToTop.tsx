import { ChevronUpIcon } from '@chakra-ui/icons';
import { BoxShadow } from 'components/atoms';
import React, { VFC } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ButtonToTop: VFC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <BoxShadow
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
