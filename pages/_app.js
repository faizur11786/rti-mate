import Layout from '@/components/Layout';
import Container from '@/components/Layout/Container';

import '../styles/globals.scss';


function MyApp ( { Component, pageProps } ) {
  return (
    <Layout>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
  );
}

export default MyApp

