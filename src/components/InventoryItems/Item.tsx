import { CartItemType } from 'src/utils/ShoppingCartReducer';
import styles from './Item.module.scss';

export const Item = ({ name, price, imageUrls, qty }: CartItemType) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={imageUrls[0]} alt={name} />
            </div>

            <div className={styles.body}>
                <h3>{name}</h3>
                <span aria-label="Price">{price}</span>
            </div>
        </div>
    );
};
