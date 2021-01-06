import { LinkIcon } from 'components/atoms';
import React, { VFC } from 'react';
import { FaLinkedin } from 'react-icons/fa';

type Props = {
  motion?: boolean;
};

const LinkedInIcon: VFC<Props> = ({ motion }) => (
  <LinkIcon href="" icon={FaLinkedin} motion={motion} />
);

export default LinkedInIcon;
