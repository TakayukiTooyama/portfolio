import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { VFC } from 'react';
import { Link } from 'react-scroll';

type Props = {
  name: string;
  link: string;
  fontSize?: string;
};

const LinkStyle = styled(Link)`
  &:hover {
    transform: 'scale(1.2)';
    transition: 'all 0.4s ease-out';
  }
`;

const LinkText: VFC<Props> = ({ name, link, fontSize = '20px' }) => (
  <LinkStyle
    activeClass="active"
    to={link}
    spy
    smooth
    offset={-70}
    duration={800}
  >
    <Text fontSize={fontSize}>{name}</Text>
  </LinkStyle>
);

export default LinkText;
