import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { DarkModeBox } from 'components/atoms';
import React, { FC } from 'react';

type Props = {
  onClick: () => void;
};

const Hamburger: FC<Props> = ({ onClick }) => (
  <DarkModeBox
    as={IconButton}
    aria-label="menu"
    w={[10, 12]}
    h={[10, 12]}
    borderRadius="50%"
    display={['block', 'block', 'none']}
    onClick={onClick}
    _focus={{ shadow: 'none' }}
  >
    <HamburgerIcon w={[5, 6]} h={[5, 6]} />
  </DarkModeBox>
);

export default Hamburger;
