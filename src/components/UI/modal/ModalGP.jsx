import React from 'react';
import styles from './ModalGP.module.css'

const ModalGP = ({children, visible, setVisible}) => {

    const rootClasses = [styles.modalgp]

    if (visible) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.modalgp__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalGP;