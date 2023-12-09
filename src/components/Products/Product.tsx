import { useState } from 'react';
import { useCart } from 'src/context/ShoppingContext';
import { QuantityBar } from '../QuantityBar/QuantityBar';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { PlusCircle } from '@phosphor-icons/react';

import styles from './Product.module.scss';
import { AddedToCartPopUp } from '../AddedToCartPopUp/AddedToCartPopUp';

type ProductProps = {
    id: number;
    name: string;
    price: number;
    imageUrls: string[];
};

export const Product = (product: ProductProps) => {
    const [isNewlyAdded, setIsNewlyAdded] = useState<boolean>(false);
    const { getItemQty, increaseCartQty } = useCart();
    const { name, price, imageUrls, id } = product;

    const qty = getItemQty(id);

    const addProduct = () => {
        setIsNewlyAdded(true);
        increaseCartQty({ ...product, qty });

        setTimeout(() => {
            setIsNewlyAdded(false);
        }, 1500);
    };

    return (
        <>
            {isNewlyAdded && <AddedToCartPopUp item={ name }/>}
            <div className={styles.card}>
                <div className={styles.header}>
                    <img src={imageUrls[0]} alt={name} />
                </div>

                <div className={styles.body}>
                    <h3>{name}</h3>
                    <span aria-label="Price">${price.toLocaleString()}</span>
                </div>

                {qty == 0 ? (
                    <PrimaryButton increaseCartQtyHandler={addProduct}>
                        <div className="flex">
                            <PlusCircle size={28} />
                            <span>Add To Cart</span>
                        </div>
                    </PrimaryButton>
                ) : (
                    <QuantityBar {...product} qty={qty} />
                )}
            </div>
        </>
    );
};
