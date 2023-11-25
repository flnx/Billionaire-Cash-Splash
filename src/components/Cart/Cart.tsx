import { ShoppingCartSimple, X } from '@phosphor-icons/react';
import styles from './Cart.module.scss';
import { CartItem } from './CartItem';

export const Cart = () => {
    return (
        <>
            <aside className={styles.cart}>
                <div className={styles.header}>
                    <ShoppingCartSimple size={32} />
                    <span>your cart</span>
                    <X size={32} />
                </div>
                <section className={styles.items}>
                    <CartItem />
                    <CartItem />
                </section>

                <div className={styles.checkout}>
                    <div className={styles.total}>
                        <span>Subtotal:</span>
                        <span>$3666</span>
                    </div>

                    <button>Buy</button>
                    <button>Clear Cart</button>
                </div>
            </aside>
            <div className={styles.overlay} />
        </>
    );
};
