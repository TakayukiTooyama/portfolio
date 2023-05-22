import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Link } from 'react-scroll';

type Props = {
  name: string;
  link: string;
};

const LinkStyle = styled(Link)`
  position: relative;
  cursor: pointer;
`;

const LinkText: FC<Props> = ({ name, link }) => (
  <LinkStyle
    activeClass="active"
    to={link}
    spy
    smooth
    offset={-70}
    duration={800}
  >
    <Text fontSize="25px">{name}</Text>
  </LinkStyle>
);

export default LinkText;
