import Form1 from "../components/Form1";
import styles from '../styles/Apply.module.scss';
import Image from "next/image";
import Form2 from "@/components/Form2";
// import Header from "@/components/Footer";



const Apply = () => {
    return (
        <>
            <div className="container">
                <div className={styles.apply_form}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <Form1 />
                                {/* <Form2 /> */}
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