import React from 'react'

import styles from "./Dropdown.module.scss";
const Dropdown = ( { className, label, text, ...props } ) => {
    return (
        <div className={styles.field}>
            {label && <div className={styles.label}>{label}</div>}
            <div className={styles.wrap}>
            </div>
        </div>
    );
};

export default Dropdown;