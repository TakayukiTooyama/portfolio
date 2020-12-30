import { useColorMode, Switch, HStack, Icon } from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <HStack>
      <Icon as={IoMdSunny} />
      <Switch
        colorScheme="purple"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
      <Icon as={FaMoon} />
    </HStack>
  );
};
