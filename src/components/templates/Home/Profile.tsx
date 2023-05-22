import { Box, HStack, Image, Text } from '@chakra-ui/react';
import {
  BoxShadow,
  DarkModeBox,
  GithubIcon,
  SectionTitle,
  TwitterIcon,
} from 'components/atoms';
import Wave2 from 'components/atoms/boundary/Wave2';
import { Container } from 'components/templates';
import React, { FC } from 'react';
import { Element } from 'react-scroll';

const Profile: FC = () => (
  <DarkModeBox bglight="gray.100">
    <Container maxW="3xl">
      <Element name="profile">
        <SectionTitle title="Profile" mb={6} />
        <BoxShadow
          boxStyle="inner"
          py={[8, 8, 12]}
          px={8}
          align="center"
          alignItems="center"
          display={['block', 'block', 'flex']}
        >
          <Box w={['100%', '100%', '45%']} mb={[10, 10, 0]}>
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
            <HStack  justifyContent="center" spacing={4}>
              <TwitterIcon />
              <GithubIcon />
              {/* <ZennIcon /> */}
            </HStack>
          </Box>
          <Box
            w={['100%', '100%', '55%']}
            maxW="400px"
            textAlign="center"
            lineHeight="1.5"
          >
            <Text mb={4} lineHeight="1.7">
              遠山 宜志 新潟県出身23歳
              <br />
              フロントエンドを中心として活動中。
              <br />
              新しい技術が大好き。
            </Text>

            <Text mb={4} textAlign="justify">
              大学では、12年続けてきた陸上をするためにスポーツを専攻。
              スポーツをやる反面、小さい時から自分で想像したものを作ることが好きだった。
              私は探しに探しプログラミングに出会った。
            </Text>
            <Text mb={4} textAlign="justify">
              自分の作ったものが実際に使われている時の喜び、
              身近な人の悩みを解決した時に想像以上に驚かれたり、喜ばれたりしたときの気持ちは忘れられない。
              どんどんエンジニアになりたいという気持ちが高まっていった。
            </Text>
            <Text>
              私はこれからも経験を積み、
              <br />
              圧倒的に信頼されるエンジニアを目指している。
            </Text>
            <Box />
          </Box>
        </BoxShadow>
      </Element>
    </Container>
    <Wave2 filllight="#374565" filldark="#1A212C" />
  </DarkModeBox>
);

export default Profile;
