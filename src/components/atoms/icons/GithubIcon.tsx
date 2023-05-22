import { LinkIcon } from 'components/atoms';
import React, { FC } from 'react';
import { FaGithubSquare } from 'react-icons/fa';

type Props = {
  motion?: boolean;
};

const GithubIcon: FC<Props> = ({ motion }) => (
  <LinkIcon
    href="https://github.com/TakayukiTooyama"
    icon={FaGithubSquare}
    motion={motion}
  />
);

export default GithubIcon;
