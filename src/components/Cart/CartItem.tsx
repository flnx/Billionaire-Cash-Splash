import { Plus, Minus, X } from '@phosphor-icons/react';

import styles from './CartItem.module.scss';
import { useCart } from 'src/context/ShoppingContext';

type CartItemProps = {
    id: number;
    name: string;
    price: number;
    imageUrls: string[];
    qty: number;
};

export const CartItem = (item: CartItemProps) => {
    const { increaseCartQty, decreaseCartQty, removeFromCart } = useCart();

    const { id, name, price, imageUrls, qty } = item;

    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={imageUrls[0]} alt={name + id} />
            </div>
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.price}>${(price * qty).toFixed(2)}</p>
                <div className={styles.qBar}>
                    <Minus
                        size={16}
                        className={styles.icon}
                        onClick={() => decreaseCartQty(item)}
                    />
                    <span>{qty}</span>
                    <Plus
                        size={16}
                        className={styles.icon}
                        onClick={() => increaseCartQty(item)}
                    />
                </div>
            </div>

            <X
                size={16}
                className={styles.close}
                onClick={() => removeFromCart(item)}
            />
        </div>
    );
};
