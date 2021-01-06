import { Box, HStack, Image, Text } from '@chakra-ui/react';
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from 'components/atoms';
import BoxShadow from 'components/atoms/BoxShadow';
import SectionTitle from 'components/atoms/SectionTitle';
import React, { VFC } from 'react';
import { Element } from 'react-scroll';

const Profile: VFC = () => (
  <Element name="profile">
    <Box align="center" h="100vh">
      <SectionTitle title="Profile" />

      <Box mb={4} />
      <BoxShadow py={8} px={4}>
        <Box w="100%" maxW="300px" mr={[0, 0, 4]} mb={[4, 4, 0]}>
          <Image
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
            src="/profile-photo.jpg"
            alt="Takayuki Tooyama"
            shadow="base"
          />
          <Box mb={4} />
          <Text fontSize="2xl">Takayuki Tooyama</Text>
        </Box>
        <Box>
          <Text mb={1}>遠山 宜志 新潟県出身21歳</Text>
          <Text mb={2}>
            フロント開発を中心として活動中。 <br />
            新しい技術が大好き。
          </Text>
          <Text w="100%" maxW="400px">
            大学では、12年続けてきた陸上をするためにスポーツを専攻。
            スポーツをやる反面、小さい時から自分で想像したものを作ることが好きだった。
            私は探しに探しプログラミングに出会った。
          </Text>
          <Text> 自分の作ったものを使っていただける。</Text>
          <Text> くだらないものでも笑いが生まれる。</Text>
          <Text>信頼されるエンジニアを目指している</Text>
          <Box mb={8} />
          <HStack justify="center" spacing={4}>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <GithubIcon />
          </HStack>
        </Box>
      </BoxShadow>
    </Box>
  </Element>
);

export default Profile;
