import React from 'react';
import styles from './ButtonGP.module.css'

const ButtonGP = ({children, ...props}) => {
    return (
        <button {...props} className={styles.btngp}>
            {children}
        </button>
    );
};

export default ButtonGP;