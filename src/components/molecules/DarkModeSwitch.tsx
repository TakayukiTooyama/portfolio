import { HStack, Icon, Switch, useColorMode } from '@chakra-ui/react';
import { VFC } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';

const DarkModeSwitch: VFC = () => {
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

export default DarkModeSwitch;
