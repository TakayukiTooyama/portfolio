import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = HeadingProps & {
  title: string;
};

export const H1: FC<Props> = ({ title, ...props }) => (
  <Heading as="h1" {...props}>
    {title}
  </Heading>
);

export const H2: FC<Props> = ({ title, ...props }) => (
  <Heading as="h2" {...props}>
    {title}
  </Heading>
);

export const H3: FC<Props> = ({ title, ...props }) => (
  <Heading as="h3" {...props}>
    {title}
  </Heading>
);

export const H4: FC<Props> = ({ title, ...props }) => (
  <Heading as="h4" {...props}>
    {title}
  </Heading>
);

export const H5: FC<Props> = ({ title, ...props }) => (
  <Heading as="h5" {...props}>
    {title}
  </Heading>
);

export const H6: FC<Props> = ({ title, ...props }) => (
  <Heading as="h6" {...props}>
    {title}
  </Heading>
);
