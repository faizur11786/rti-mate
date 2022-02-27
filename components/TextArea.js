
import styles from "../styles/TextArea.module.scss";


const TextArea = ( { className, label, text, ...props } ) => {
    return (
        <div className={styles.field}>
            {label && <div className={styles.label}>{label} <span>*</span></div>}
            <div className={styles.wrap}>
                <textarea className={styles.textarea} {...props} />
            </div>
            <div className={styles.text}>{text}</div>
        </div>
    );
};

export default TextArea;