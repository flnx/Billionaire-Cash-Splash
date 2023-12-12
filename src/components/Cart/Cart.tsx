// Components
import { ShoppingCartSimple, X } from '@phosphor-icons/react';
import { CartItem } from './CartItem';

// Hooks
import { useEffect } from 'react';
import { useCart } from 'src/context/ShoppingContext';
import { useBillionaire } from 'src/context/BillionaireContext';

// Utils
import { disableBodyScroll, enableBodyScroll } from 'src/utils/utils';

import styles from './Cart.module.scss';

export const Cart = () => {
    const { itemsInCart, subTotal, isOpen, closeCart, clearCart } = useCart();
    const { billionaire, addToInventory } = useBillionaire();

    const isCartEmpty: boolean = itemsInCart.length == 0;
    const isBalanceEnough: boolean = (billionaire?.netWorth ?? -1) >= subTotal;

    useEffect(() => {
        if (isOpen) {
            disableBodyScroll();
        }

        return () => enableBodyScroll();
    }, [isOpen]);

    return isOpen ? (
        <>
            <aside className={styles.cart}>
                <div className={styles.header}>
                    <ShoppingCartSimple size={32} />
                    <div className={styles.balance}>
                        <p>BALANCE</p>
                        <p>${billionaire?.netWorth?.toLocaleString() || 0}</p>
                    </div>
                    <X size={32} onClick={closeCart} className="pointer" />
                </div>
                <section className={styles.items}>
                    {isCartEmpty && (
                        <p className={styles.empty}>Your Cart is Empty</p>
                    )}
                    {itemsInCart.map((item) => (
                        <CartItem {...item} key={item.id} />
                    ))}
                </section>

                <div className={styles.checkout}>
                    <div className={styles.total}>
                        <span>Subtotal:</span>
                        <span className={!isBalanceEnough ? styles.error : ''}>
                            ${subTotal.toLocaleString()}
                        </span>
                    </div>
                    <button
                        onClick={() =>
                            addToInventory(subTotal, clearCart, itemsInCart)
                        }
                        disabled={!isBalanceEnough || isCartEmpty}
                    >
                        Buy
                    </button>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            </aside>
            <div className={styles.overlay} onClick={closeCart} />
        </>
    ) : (
        <></>
    );
};
