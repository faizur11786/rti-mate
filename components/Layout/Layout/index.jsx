import Head from "next/head"
import { Footer, Header } from ".."
import styles from "./Layout.module.css"

const Layout = ( { children } ) => {
    return (
        <>
            <Head>
                <title>RTI Mate | File RTI and get response</title>
            </Head>
            <main className={styles.main}>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}


export default Layout