import { Box } from '@chakra-ui/react';
import { Footer, Header, PostHeader } from 'components/templates';
import { useRouter } from 'next/dist/client/router';
import type { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const path = router.asPath.split('/')[1];
  return (
    <>
      {path === 'posts' ? <PostHeader /> : <Header />}
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
