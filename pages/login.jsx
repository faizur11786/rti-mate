import { Login } from '@/page-components/Auth';
import { useAppContext } from 'context/AppContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LoginPage = () => {
    const router = useRouter()

    const { state: { auth: { token } } } = useAppContext()


    useEffect( () => {
        token && router.back()
    }, [token] )


    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Login />
        </>
    );
}

export default LoginPage