import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = TextProps & {
  text: string;
};

export const T1: FC<Props> = ({ text, ...props }) => (
  <Text fontSize={['2xl', '3xl', '4xl']} {...props}>
    {text}
  </Text>
);

export const T2: FC<Props> = ({ text, ...props }) => (
  <Text fontSize={['xl', '2xl', '3xl']} {...props}>
    {text}
  </Text>
);

export const T3: FC<Props> = ({ text, ...props }) => (
  <Text fontSize={['lg', 'xl', '2xl']} {...props}>
    {text}
  </Text>
);

export const T4: FC<Props> = ({ text, ...props }) => (
  <Text fontSize={['md', 'lg', 'xl']} {...props}>
    {text}
  </Text>
);

export const T5: FC<Props> = ({ text, ...props }) => (
  <Text fontSize={['sm', 'md', 'lg']} {...props}>
    {text}
  </Text>
);
