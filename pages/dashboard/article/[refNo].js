import { Details } from '@/page-components/Article';
import { ProtectRoutes } from 'HOC';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

const ArticleDetail = ( props ) => {
    const router = useRouter()
    const { refNo } = router.query
    console.log( "props", refNo );
    return (
        <>
            <Head>
                <title>
                    {refNo || "Article Details"}
                </title>
            </Head>
            <Details />
        </>
    )
}

export default ProtectRoutes( ArticleDetail, ["user", "admin"] )