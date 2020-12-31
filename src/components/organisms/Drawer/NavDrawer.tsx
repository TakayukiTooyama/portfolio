import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { VFC } from 'react';

import DrawerBody from './DrawerBody';
import DrawerHeader from './DrawerHeader';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const NavDrawer: VFC<Props> = ({ onClose, isOpen }) => (
  <Drawer onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerHeader onClose={onClose} />
        <DrawerBody />
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

export default NavDrawer;
