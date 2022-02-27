
import styles from "../styles/TextInput.module.scss";
const TextInput = ( { className, label, text, ...props } ) => {
    return (
        <div className={styles.field}>
            {label && <div className={styles.label}>{label} <span>*</span></div>}
            <div className={styles.wrap}>
                <input className={styles.input} {...props} />
            </div>
            <div className={styles.text}>{text}</div>
        </div>
    );
};

export default TextInput;