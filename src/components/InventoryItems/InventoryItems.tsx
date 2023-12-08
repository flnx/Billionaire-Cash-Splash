import { CartItemType } from 'src/utils/ShoppingCartReducer';
import { Item } from './Item';
import { Link } from 'react-router-dom';

import styles from './InventoryItems.module.scss';

type InventoryItemsType = {
    items: CartItemType[];
};

export const InventoryItems = ({ items }: InventoryItemsType) => {
    const isInventoryEmpty = items.length === 0;

    return isInventoryEmpty ? (
        <div className={styles.empty}>
            <h1 className={styles.title}>Your inventory is empty</h1>
            <p className={styles.redirect}>
                Head to the <Link to="/">spending spree page </Link>and raid that
                wallet!
            </p>
        </div>
    ) : (
        <div className={styles.items}>
            {items.map((i) => (
                <Item {...i} key={i.id} />
            ))}
        </div>
    );
};
