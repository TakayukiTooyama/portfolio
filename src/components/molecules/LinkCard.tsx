import { Stack, Text } from '@chakra-ui/react';
import { BoxShadow, DarkModeBox, LinkButton } from 'components/atoms';
import React, { VFC } from 'react';

type Props = {
  name: string;
  href: string;
};

const LinkCard: VFC<Props> = ({ name, href }) => (
  <BoxShadow>
    <DarkModeBox
      px={4}
      py={4}
      boxShadow="base"
      bglight="white"
      textAlign="center"
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
    </DarkModeBox>
  </BoxShadow>
);

export default LinkCard;
