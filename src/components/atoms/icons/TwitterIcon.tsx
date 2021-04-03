import { LinkIcon } from 'components/atoms';
import React, { VFC } from 'react';
import { FaTwitterSquare } from 'react-icons/fa';

type Props = {
  motion?: boolean;
};

const TwitterIcon: VFC<Props> = ({ motion }) => (
  <LinkIcon
    href="https://twitter.com/tooyama107"
    icon={FaTwitterSquare}
    motion={motion}
  />
);

export default TwitterIcon;
