import Layout from '@/components/Layout';
import Container from '@/components/Layout/Container';
import '../styles/globals.scss';
import { Toaster } from 'react-hot-toast';
import { AppWrapper } from 'context/AppContext';


function MyApp ( { Component, pageProps } ) {
  return (
    <AppWrapper>
      <Layout>
        <Container>
          <Component {...pageProps} />
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </Container>
      </Layout>
    </AppWrapper>

  );
}

export default MyApp

