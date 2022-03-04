import Layout from '@/components/Layout';
import Container from '@/components/Layout/Container';
import { Provider } from "react-redux";
import '../styles/globals.scss';
import { store, persistor } from "../redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

function MyApp ( { Component, pageProps } ) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Container>
            <Component {...pageProps} />
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
          </Container>
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp

