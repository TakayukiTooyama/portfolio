import { Stack, Text } from '@chakra-ui/react';
import { BoxShadow, LinkButton } from 'components/atoms';
import React, { VFC } from 'react';

type Props = {
  name: string;
  href: string;
};

const LinkCard: VFC<Props> = ({ name, href }) => (
  <BoxShadow
    px={8}
    py={8}
    textAlign="center"
    borderRadius="10px"
    boxStyle="inner"
  >
    <Stack
      direction={['column', 'row']}
      align="center"
      justify={['center', 'space-between']}
      spacing={2}
    >
      <Text fontSize="xl">{name}</Text>
      <LinkButton href={href} />
    </Stack>
  </BoxShadow>
);

export default LinkCard;
