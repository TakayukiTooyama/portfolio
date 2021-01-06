import { Box, Text } from '@chakra-ui/react';
import React, { VFC } from 'react';

type Props = {
  title: string;
  text: string;
};

const SkillCard: VFC<Props> = ({ title, text }) => (
  <Box shadow="lg" align="center">
    <Box py={4} px={2} bg="purple.700" color="white">
      <Text>{title}</Text>
    </Box>
    <Box py={4} px={2} bg="white" color="black">
      <Text>{text}</Text>
    </Box>
  </Box>
);

export default SkillCard;
