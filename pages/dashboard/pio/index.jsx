import { PIO } from "@/page-components/PIO";
import ProtectRoutes from "HOC/ProtectRoutes";
import Head from "next/head";
const PIOPage = () => {
    return (
        <>
            <Head>
                <title>Manage PIO</title>
            </Head>
            <PIO />
        </>
    )
}

export default ProtectRoutes( PIOPage, ["user", "admin"] )