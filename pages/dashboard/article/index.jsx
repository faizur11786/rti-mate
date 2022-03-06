import { Articles } from "@/page-components/Article"
import { ProtectRoutes } from "HOC"
import Head from "next/head"

const ArticlePage = () => {
    return (
        <>
            <Head>
                <title>Articles</title>
            </Head>
            <Articles />
        </>
    )
}

export default ProtectRoutes( ArticlePage, ["user", "admin"] )