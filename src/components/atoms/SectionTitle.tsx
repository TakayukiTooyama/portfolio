import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = HeadingProps & {
  title: string;
  color?: string;
};

const SectionTitle: FC<Props> = (props) => {
  const { title } = props;

  return (
    <Heading textAlign="center" size="2xl" lineHeight="1.5" {...props}>
      {title}
    </Heading>
  );
};

export default SectionTitle;
