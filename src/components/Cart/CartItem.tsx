import { Plus, Minus, X } from '@phosphor-icons/react';

import styles from './CartItem.module.scss';

export const CartItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img
                    src="https://www.topgear.com/sites/default/files/2022/07/13.jpg"
                    alt="productName"
                />
            </div>
            <div className={styles.info}>
                <p className={styles.name}>Item Name</p>
                <p className={styles.price}>$999</p>
                <div className={styles.qBar}>
                    <Minus size={16} className={styles.icon} />
                    <span>5</span>
                    <Plus size={16} className={styles.icon} />
                </div>
            </div>

            <X size={16} className={styles.close} />
        </div>
    );
};
