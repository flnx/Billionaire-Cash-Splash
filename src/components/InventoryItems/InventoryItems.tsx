import { CartItemType } from 'src/utils/ShoppingCartReducer';
import { Item } from './Item';

import styles from './InventoryItems.module.scss';

type InventoryItemsType = {
    items: CartItemType[];
};

export const InventoryItems = ({ items }: InventoryItemsType) => {
    return (
        <div className={styles.items}>
            {items.map((i) => (
                <Item {...i} key={i.id} />
            ))}
        </div>
    );
};
