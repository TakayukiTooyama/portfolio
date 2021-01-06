/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ChevronUpIcon } from '@chakra-ui/icons';
import { DarkModeBox } from 'components/atoms';
import React, { VFC } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ButtonToTop: VFC = () => {
  const scrollToTop = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    scroll.scrollToTop();
  };
  return (
    <DarkModeBox
      bglight="white"
      w="90px"
      h="90px"
      borderRadius="50%"
      pos="absolute"
      top="-35px"
      left="50%"
      transform="translate(-50%)"
      _hover={{
        transform: 'translate(-50%,-5px)',
        transition: 'all 0.3s ease',
      }}
      onClick={scrollToTop}
    >
      <ChevronUpIcon w={16} h={16} />
    </DarkModeBox>
  );
};

export default ButtonToTop;
