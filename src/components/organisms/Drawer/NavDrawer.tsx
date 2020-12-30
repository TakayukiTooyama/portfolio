import { Drawer, DrawerOverlay, DrawerContent } from '@chakra-ui/react';
import { VFC } from 'react';

import DrawerHeader from './DrawerHeader';
import DrawerBody from './DrawerBody';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const NavDrawer: VFC<Props> = ({ onClose, isOpen }) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader onClose={onClose} />
          <DrawerBody />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
