// Components
import { QuantityBar } from '../QuantityBar/QuantityBar';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { PlusCircle } from '@phosphor-icons/react';
import { AddedToCartPopUp } from '../AddedToCartPopUp/AddedToCartPopUp';
import { PopUpContainer } from '../PopUpContainer/PopUpContainer';

// Hooks
import { useCart } from 'src/context/ShoppingContext';

import styles from './Product.module.scss';

type ProductProps = {
    id: number;
    name: string;
    price: number;
    imageUrls: string[];
    category: string;
};

export const Product = (product: ProductProps) => {
    const { getItemQty, increaseCartQty, addPopUpItem, itemsToPopUp } = useCart();
    const { name, price, imageUrls, id } = product;

    const qty = getItemQty(id);
    const isTherePopUps: boolean = itemsToPopUp.length !== 0;

    const addProduct = () => {
        addPopUpItem(name);
        increaseCartQty({ ...product, qty });
    };

    return (
        <>
            {isTherePopUps && (
                <PopUpContainer>
                    {itemsToPopUp.map((i) => (
                        <AddedToCartPopUp item={i} key={i} />
                    ))}
                </PopUpContainer>
            )}
            <div className={styles.card}>
                <div className={styles.header}>
                    <img src={imageUrls[0]} alt={name} />
                </div>

                <div className={styles.body}>
                    <h3>{name}</h3>
                    <span aria-label="Price">${price.toLocaleString()}</span>
                </div>

                <div className={styles.footer}>
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
            </div>
        </>
    );
};
