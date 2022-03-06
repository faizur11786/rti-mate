import Dashboard from '@/page-components/Dashboard';
import ProtectRoutes from 'HOC/ProtectRoutes'
import Head from 'next/head';


const DashboardPage = () => {
    return (
        <>
            <Head>
                <title>Welcome to Dashboard</title>
            </Head>
            <Dashboard />
        </>
    )
}

export default ProtectRoutes( DashboardPage, ["user", "admin"] )