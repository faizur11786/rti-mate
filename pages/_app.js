import { Container, Layout } from '../components/Layout';
import '../styles/globals.css';


function MyApp ( { Component, pageProps } ) {
  return (
    <Layout>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
  )
}

export default MyApp

