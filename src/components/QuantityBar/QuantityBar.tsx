import { useCart } from 'src/context/ShoppingContext';
import styles from './QuantityBar.module.scss';

type QuantityBarProps = {
    id: number;
    name: string;
    price: number;
    imageUrls: string[];
    qty: number;
};

export const QuantityBar = (product: QuantityBarProps) => {
    const { increaseCartQty, decreaseCartQty } = useCart();

    return (
        <div className={styles.qBar}>
            <button onClick={() => decreaseCartQty(product)}>-</button>
            <div className={styles.inCart}>
                <input type="number" value={product.qty} readOnly />
                <span className={styles.text}>in cart</span>
            </div>
            <button onClick={() => increaseCartQty(product)}>+</button>
        </div>
    );
};
