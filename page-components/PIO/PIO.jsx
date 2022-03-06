import Table from "@/components/Table";
import { AdminLayout } from "HOC";
import Link from "next/link";
import css from "./index.module.scss";
const AddPIO = () => {
    return (
        <div className={css.card}>
            <div className={`${css.cardHeader}`}>
                <h2>Manage PIO</h2>
                <Link href={"pio/add"}>
                    <button className='btn btn-primary'>Add PIO</button>
                </Link>
            </div>
            <div className='card--body'>
                <Table />
            </div>
            <div className='card--footer'></div>
        </div>
    )
}

export default AdminLayout( AddPIO )