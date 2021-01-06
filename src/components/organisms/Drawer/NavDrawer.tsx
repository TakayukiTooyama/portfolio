import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useColorMode,
} from '@chakra-ui/react';
import { VFC } from 'react';

import DrawerBody from './DrawerBody';
import DrawerHeader from './DrawerHeader';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const NavDrawer: VFC<Props> = ({ onClose, isOpen }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };
  const color = { light: 'black', dark: 'white' };
  return (
    <Drawer onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent bg={bgColor[colorMode]} color={color[colorMode]}>
          <DrawerHeader onClose={onClose} />
          <DrawerBody />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;
