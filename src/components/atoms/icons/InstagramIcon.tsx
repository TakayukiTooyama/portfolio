import { LinkIcon } from 'components/atoms';
import React, { VFC } from 'react';
import { FaInstagram } from 'react-icons/fa';

type Props = {
  motion?: boolean;
};

const GithubIcon: VFC<Props> = ({ motion }) => (
  <LinkIcon
    href="https://www.instagram.com/takayuki_tooyama"
    icon={FaInstagram}
    color="#CF2E92"
    motion={motion}
  />
);

export default GithubIcon;
