import Link from "next/link"
import styles from '../styles/Navbar.module.scss'
import Image from "next/image"
import { useAppContext } from "context/AppContext"

const Header = () => {

    const { state: { auth: { token } } } = useAppContext()


    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <a>
                                <Image src="/logo.png" alt="" width={130} height={40} />
                            </a>
                        </Link>
                    </div>
                    <ul className={styles.navbar}>
                        <li className={styles.navItem}>
                            <Link className={styles.navLink} href="/apply">Apply</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link className={styles.navLink} href="/about">About</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link className={styles.navLink} href="/contact">Contact</Link>
                        </li>
                        {
                            token ? (
                                <li className={styles.navItem}>
                                    <Link className={styles.navLink} href="/dashboard">
                                        <button className="btn btn-primary">Dashboard</button>
                                    </Link>
                                </li>
                            ) : (
                                <li className={styles.navItem}>
                                    <Link className={styles.navLink} href="/login">
                                        <button className="btn btn-primary">Login</button>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>

        </header >
    )
}

export default Header