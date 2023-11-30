import { ShoppingCartSimple, X } from '@phosphor-icons/react';
import { CartItem } from './CartItem';
import { useCart } from 'src/context/ShoppingContext';
import { useBillionaire } from 'src/context/BillionaireContext';
import styles from './Cart.module.scss';

export const Cart = () => {
    const { itemsInCart, subTotal, isOpen, closeCart, clearCart } = useCart();
    const { billionaire, addToInventory } = useBillionaire();

    const isCartEmpty: boolean = itemsInCart.length == 0;
    const isBalanceEnough: boolean = (billionaire?.netWorth ?? -1) >= subTotal;

    return isOpen ? (
        <>
            <aside className={styles.cart}>
                <div className={styles.header}>
                    <ShoppingCartSimple size={32} />
                    <span>BALANCE: ${billionaire?.netWorth || 0}</span>
                    <X size={32} onClick={closeCart} className="pointer" />
                </div>
                <section className={styles.items}>
                    {isCartEmpty && <p>Your Cart is Empty</p>}
                    {itemsInCart.map((item) => (
                        <CartItem {...item} key={item.id} />
                    ))}
                </section>

                <div className={styles.checkout}>
                    <div className={styles.total}>
                        <span>Subtotal:</span>
                        <span className={!isBalanceEnough ? styles.error : ''}>
                            ${subTotal.toFixed(2)}
                        </span>
                    </div>
                    <button 
                        onClick={() => addToInventory(subTotal, clearCart, itemsInCart)}
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
