import { ShoppingCartSimple, X } from '@phosphor-icons/react';
import { CartItem } from './CartItem';
import styles from './Cart.module.scss';
import { useCart } from 'src/context/ShoppingContext';

export const Cart = () => {
    const { itemsInCart, subTotal, isOpen, closeCart } = useCart();

    return isOpen ? (
        <>
            <aside className={styles.cart}>
                <div className={styles.header}>
                    <ShoppingCartSimple size={32} />
                    <span>your cart</span>
                    <X size={32} onClick={closeCart} className="pointer" />
                </div>
                <section className={styles.items}>
                    {itemsInCart.map((item) => (
                        <CartItem {...item} key={item.id} />
                    ))}
                </section>

                <div className={styles.checkout}>
                    <div className={styles.total}>
                        <span>Subtotal:</span>
                        <span>${subTotal.toFixed(2)}</span>
                    </div>

                    <button>Buy</button>
                    <button>Clear Cart</button>
                </div>
            </aside>
            <div className={styles.overlay} onClick={closeCart} />
        </>
    ) : (
        <></>
    );
};
