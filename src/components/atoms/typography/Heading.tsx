import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { VFC } from 'react';

type Props = HeadingProps & {
  title: string;
};

export const H1: VFC<Props> = ({ title, ...props }) => (
  <Heading as="h1" {...props}>
    {title}
  </Heading>
);

export const H2: VFC<Props> = ({ title, ...props }) => (
  <Heading as="h2" {...props}>
    {title}
  </Heading>
);

export const H3: VFC<Props> = ({ title, ...props }) => (
  <Heading as="h3" {...props}>
    {title}
  </Heading>
);

export const H4: VFC<Props> = ({ title, ...props }) => (
  <Heading as="h4" {...props}>
    {title}
  </Heading>
);

export const H5: VFC<Props> = ({ title, ...props }) => (
  <Heading as="h5" {...props}>
    {title}
  </Heading>
);

export const H6: VFC<Props> = ({ title, ...props }) => (
  <Heading as="h6" {...props}>
    {title}
  </Heading>
);
