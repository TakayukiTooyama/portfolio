import { LinkIcon } from 'components/atoms';
import React, { VFC } from 'react';
import { FaGithubSquare } from 'react-icons/fa';

type Props = {
  motion?: boolean;
};

const GithubIcon: VFC<Props> = ({ motion }) => (
  <LinkIcon
    href="https://github.com/TakayukiTooyama"
    icon={FaGithubSquare}
    color="black"
    motion={motion}
  />
);

export default GithubIcon;
