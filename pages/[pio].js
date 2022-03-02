import Head from 'next/head';
import { useRouter } from 'next/router'




const PIO = () => {
    const router = useRouter()
    const { pio } = router.query
    console.log( "router", router );
    return (
        <>
            <Head>
                <title>
                    {pio}
                </title>
            </Head>
            <p>PIO: {pio}</p>
        </>
    )
}

export default PIO