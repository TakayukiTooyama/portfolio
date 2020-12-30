import { VFC } from 'react';
import { Box, Divider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

export const Footer: VFC = () => (
  <>
    <Divider />
    <Box as="footer" py={4}>
      <Text>@takayuki tooyama</Text>
    </Box>
  </>
);
