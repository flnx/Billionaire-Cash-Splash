import styles from './QuantityBar.module.scss';

export const QuantityBar = () => {
    return (
        <div className={styles.qBar}>
            <button>-</button>
            <div className={styles.inCart}>
                <input type="number" value="1" />
                <span className={styles.text}>in cart</span>
            </div>
            <button>+</button>
        </div>
    );
};
