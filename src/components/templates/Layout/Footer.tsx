import { Text } from '@chakra-ui/react';
import { DarkModeBox } from 'components/atoms';
import { VFC } from 'react';

const Footer: VFC = () => (
  <>
    <DarkModeBox as="footer" textAlign="center" h="60px" lineHeight="60px">
      <Text>@2021 Takayuki Tooyama</Text>
    </DarkModeBox>
  </>
);

export default Footer;
