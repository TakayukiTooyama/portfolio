import { Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { VFC } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';

const DarkModeSwitch: VFC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <IconButton
      aria-label="darkmode-swith"
      onClick={toggleColorMode}
      cursor="pointer"
      fontSize="20px"
      isRound
      shadow="base"
      _focus={{ border: 'none' }}
      _hover={{ opacity: 0.8 }}
    >
      {isDark ? <Icon as={IoMdSunny} /> : <Icon as={FaMoon} />}
    </IconButton>
  );
};

export default DarkModeSwitch;
