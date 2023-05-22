import { LinkIcon } from 'components/atoms';
import React, { FC } from 'react';
import { FaTwitterSquare } from 'react-icons/fa';

type Props = {
  motion?: boolean;
};

const TwitterIcon: FC<Props> = ({ motion }) => (

  <LinkIcon
    href="https://twitter.com/tooyama107"
    icon={FaTwitterSquare}
    motion={motion}
  />
);

export default TwitterIcon;
