import { Heading, Text } from '@chakra-ui/react';
import { Border, DarkModeBox } from 'components/atoms';
import { Container } from 'components/templates';
import dayjs from 'dayjs';
import React, { VFC } from 'react';

type Props = {
  title: string;
  date: Date;
};

const WorkPostTop: VFC<Props> = ({ title, date }) => {
  const dateFormat = dayjs(date).format('YYYY/MM/DD');
  return (
    <DarkModeBox>
      <Container align="center">
        <Heading as="h1" size="xl">
          {title}
        </Heading>
        <Text>{dateFormat}</Text>
      </Container>
      <Border />
    </DarkModeBox>
  );
};

export default WorkPostTop;
