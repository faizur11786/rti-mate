import { Login } from '@/page-components/Auth';
import ProtectRoutes from 'HOC/ProtectRoutes';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const LoginPage = () => {
    const router = useRouter()
    const state = useSelector( state => state )

    useEffect( () => {
        state.auth.token && router.push( '/dashboard' )
    }, [] )
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