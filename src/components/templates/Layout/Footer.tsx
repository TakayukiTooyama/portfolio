import { Text } from '@chakra-ui/react';
import { ButtonToTop, DarkModeBox } from 'components/atoms';
import { VFC } from 'react';

const Footer: VFC = () => (
  <>
    <DarkModeBox
      bglight="white"
      as="footer"
      pos="relative"
      textAlign="center"
      py={4}
    >
      <Text mr="400px">@takayuki tooyama</Text>
      <ButtonToTop />
    </DarkModeBox>
  </>
);

export default Footer;
