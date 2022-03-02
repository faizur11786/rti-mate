import styles from './table.module.scss'

const Table = () => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Faizur</td>
                        <td>Faizur</td>
                        <td>Faizur</td>
                        <td>Faizur</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table