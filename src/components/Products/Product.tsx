// import { PrimaryButton } from '../Buttons/PrimaryButton';
import { useCart } from 'src/context/ShoppingContext';
import { QuantityBar } from '../QuantityBar/QuantityBar';
import { PrimaryButton } from '../Buttons/PrimaryButton';

import styles from './Product.module.scss';

type ProductProps = {
    id: number;
    name: string;
    price: number;
    imageUrls: string[];
};

export const Product = (product: ProductProps) => {
    const { getItemQty, increaseCartQty } = useCart();
    const { name, price, imageUrls, id } = product;

    const qty = getItemQty(id);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={imageUrls[0]} alt={name} />
            </div>

            <div className={styles.body}>
                <h3>{name}</h3>
                <span aria-label="Price">{price}</span>
            </div>

            {qty == 0 ? (
                <PrimaryButton increaseCartQtyHandler={() => increaseCartQty({...product, qty})}>
                    + Add To Cart
                </PrimaryButton>
            ) : (
                <QuantityBar {...product} qty={qty} />
            )}
        </div>
    );
};
