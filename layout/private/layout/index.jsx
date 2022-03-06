import css from "./layout.module.scss";
import Link from 'next/link';
import { useAppContext } from 'context/AppContext';
import { useRouter } from 'next/router';


const PrivateLayout = ( { children } ) => {
    const router = useRouter()
    const { state: { auth: { user } }, dispatch } = useAppContext()

    const menuLinks = [
        {
            label: "Overview",
            route: "/dashboard"
        },
        {
            label: "Articles",
            route: "/dashboard/article"
        },
        {
            label: "Manage PIO",
            route: "/dashboard/pio"
        }
    ]
    return (
        <div className={css.container}>
            <div className={css.sidebar}>
                <div className={css.navbar}>
                    <ul>
                        {menuLinks.map( ( link, index ) => (
                            <li key={index}>
                                <Link href={link.route}>
                                    <a className={router.asPath === link.route ? css.active : null}>{link.label}</a>
                                </Link>
                            </li>
                        ) )}
                    </ul>
                </div>
                <div className={css.profile}>
                    <div className={css.details}>
                        <h3>{user.name || "Faizur"}</h3>
                        <span>{user.email}</span>
                    </div>
                    <button
                        onClick={() => dispatch( { type: "LOGOUT" } )}
                        className={css.loginBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={css.main}>
                {children}
            </div>
        </div>
    )
}

export default PrivateLayout