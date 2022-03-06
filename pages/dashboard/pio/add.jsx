import { Add } from '@/page-components/PIO';
import ProtectRoutes from 'HOC/ProtectRoutes';
import Head from 'next/head';


const AddPIO = () => {
    return (
        <>
            <Head>
                <title>Add New PIO</title>
            </Head>
            <Add />
        </>
    )
}

export default ProtectRoutes( AddPIO, ["user", "admin"] )