import { ShoppingCartSimple, X } from '@phosphor-icons/react';
import styles from './Cart.module.scss';

export const Cart = () => {
    return (
        <>
            <aside className={styles.cart}>
                <div className={styles.header}>
                    <ShoppingCartSimple size={32} />
                    <span>your cart</span>
                    <X size={32} />
                </div>
                <div className="items">
                    <div className="item">
                        Item
                        {/* <div className="image">

                    </div>

                    <div className="product-info">
                    <p className="name">
                    
                    </p>
                    
                    <div className="price"></div>
                    
                    <div className="quantityBar">
                    + -
                    </div>
                </div> */}
                    </div>
                </div>

                <div className={styles.checkout}>
                    <div>
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
