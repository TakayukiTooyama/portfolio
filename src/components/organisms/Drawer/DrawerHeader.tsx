import { CloseIcon } from '@chakra-ui/icons';
import {
  DrawerHeader as Header,
  Flex,
  IconButton,
  Text,
} from '@chakra-ui/react';
import React, { VFC } from 'react';

type Props = {
  onClose: () => void;
};

const DrawerHeader: VFC<Props> = ({ onClose }) => (
  <Header borderBottomWidth="1px">
    <Flex justify="space-between" align="center" h="23px">
      <Text>Menu</Text>
      <IconButton aria-label="close" bg="none" onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Flex>
  </Header>
);

export default DrawerHeader;
