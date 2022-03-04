import ProtectRoutes from 'HOC/ProtectRoutes'
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const { user } = useSelector( state => state.auth );

    return (
        <>
            <Head>
                <title>Welcome to Dashboard</title>
            </Head>
            <div style={{ textAlign: "center", minHeight: "40vh", margin: "4rem" }}>
                <h1 style={{ margin: "1rem" }}>Welcome to Dashboard</h1>
                <p style={{ marginBottom: "2rem" }}>{`${user.email} | ${user.mobile}`}</p>
                <Link href="/apply">
                    <a className='btn btn-primary'>Apply</a>
                </Link>
            </div>
        </>
    )
}

export default ProtectRoutes( Dashboard, ["user", "admin"] )