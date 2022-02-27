import Form from "../components/Form";
import styles from '../styles/Apply.module.scss';
import Image from "next/image";


const Apply = () => {
    return (
        <>
            <div className="container">
                <div className={styles.apply_form}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <div className={styles.heading}>
                                    <span className={styles.heading_number}> 1 </span>
                                    <p className={styles.heading_text}>Personal Details</p>
                                </div>
                                <Form />
                            </div>
                            <div className={styles.col}>
                                <div className={styles.Image}>
                                    <img src="/apply-form.png" alt="apply-form" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apply