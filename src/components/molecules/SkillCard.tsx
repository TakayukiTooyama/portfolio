import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  title: string;
  text: string;
};

const SkillCard: FC<Props> = ({ title, text }) => (
  <Box shadow="lg" textAlign="center">
    <Box py={4} px={2} bg="brand.700" color="white">
      <Text>{title}</Text>
    </Box>
    <Box py={4} px={2} bg="gray.100" color="black">
      <Text>{text}</Text>
    </Box>
  </Box>
);

export default SkillCard;
