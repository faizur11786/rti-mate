import Table from "@/components/Table";
import styles from "./pio.module.scss";
const AddPIO = () => {
    return (
        <div className={styles.card}>
            <div className={`${styles.cardHeader}`}>
                <h2>Manage PIO</h2>
                <button className='btn btn-primary'>Add PIO</button>
            </div>
            <div className='card--body'>
                <Table />
            </div>
            <div className='card--footer'></div>
        </div>
    )
}

export default AddPIO