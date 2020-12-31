import { Box, Divider, Text } from '@chakra-ui/react';
import { VFC } from 'react';

const Footer: VFC = () => (
  <>
    <Divider />
    <Box as="footer" py={4}>
      <Text>@takayuki tooyama</Text>
    </Box>
  </>
);

export default Footer;
