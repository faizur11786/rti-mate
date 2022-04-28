import Container from '@/components/Container';
import '../styles/globals.scss';
import { Toaster } from 'react-hot-toast';
import { AppWrapper } from 'context/AppContext';
import Layout from 'layout/public';


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

