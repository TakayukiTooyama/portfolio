import { Text } from '@chakra-ui/react';
import { DarkModeBox } from 'components/atoms';
import { FC } from 'react';

const Footer: FC = () => (
  <>
    <DarkModeBox as="footer" textAlign="center" h="60px" lineHeight="60px">
      <Text>@2023 Takayuki Tooyama</Text>
    </DarkModeBox>
  </>
);

export default Footer;
