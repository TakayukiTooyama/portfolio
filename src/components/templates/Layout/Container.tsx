import { Container, ContainerProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = ContainerProps & {
  maxW?: string;
  align?: string;
};

const SectionContainer: FC<Props> = ({
  children,
  maxW = '2xl',
  align = '',
  ...props
}) => (
  <Container maxW={maxW} py={24} align={align} {...props}>
    {children}
  </Container>
);

export default SectionContainer;
