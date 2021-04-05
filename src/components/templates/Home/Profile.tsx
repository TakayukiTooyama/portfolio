import { Box, HStack, Image, Text } from '@chakra-ui/react';
import {
  BoxShadow,
  DarkModeBox,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  SectionTitle,
  TwitterIcon,
} from 'components/atoms';
import Wave2 from 'components/atoms/boundary/Wave2';
import { Container } from 'components/templates';
import React, { VFC } from 'react';
import { Element } from 'react-scroll';

const Profile: VFC = () => (
  <DarkModeBox bglight="gray.100">
    <Container>
      <Element name="profile">
        <SectionTitle title="Profile" mb={6} />
        <BoxShadow
          box="inner"
          py={[8, 8, 12]}
          px={[4, 4, 8]}
          align="center"
          alignItems="center"
          display={['block', 'block', 'flex']}
        >
          <Box w="100%" mb={[10, 10, 0]}>
            <Image
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
              src="/profile-photo.jpg"
              alt="Takayuki Tooyama"
              shadow="base"
              mb={4}
            />
            <Text fontSize="2xl" mb={2}>
              Takayuki Tooyama
            </Text>
            <HStack justify="center" spacing={4}>
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <GithubIcon />
            </HStack>
          </Box>
          <Box w="100%" maxW="400px" textAlign="center" lineHeight="1.5">
            <Text mb={1}>遠山 宜志 新潟県出身21歳</Text>
            <Text mb={4}>
              フロント開発を中心として活動中。 <br />
              新しい技術が大好き。
            </Text>
            <Text mb={4}>
              大学では、12年続けてきた陸上をするためにスポーツを専攻。
              スポーツをやる反面、小さい時から自分で想像したものを作ることが好きだった。
              私は探しに探しプログラミングに出会った。
            </Text>
            <Text> 自分の作ったものを使っていただける。</Text>
            <Text> くだらないものでも笑いが生まれる。</Text>
            <Text>信頼されるエンジニアを目指している。</Text>
            <Box />
          </Box>
        </BoxShadow>
      </Element>
    </Container>
    <Wave2 filllight="#374565" filldark="#1A212C" />
  </DarkModeBox>
);

export default Profile;
