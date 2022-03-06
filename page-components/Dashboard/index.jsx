import css from "./index.module.scss";
import Link from 'next/link';
import { AdminLayout } from 'HOC';
import { useAppContext } from 'context/AppContext';

const Dashboard = () => {
    const { state: { auth: { user } } } = useAppContext();

    return (
        <div style={{ textAlign: "center", minHeight: "40vh", margin: "4rem" }}>
            <h1 style={{ margin: "1rem" }}>Welcome to Dashboard</h1>
            <p style={{ marginBottom: "2rem" }}>{`${user.email} | ${user.mobile}`}</p>
            <Link href="/apply">
                <a className='btn btn-primary'>Apply</a>
            </Link>
        </div>
    )
}

export default AdminLayout( Dashboard )