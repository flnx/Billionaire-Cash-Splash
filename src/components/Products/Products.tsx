import productsData from 'src/data/products.json';
import { Product } from './Product';

import styles from './Products.module.scss';

export const Products = () => {
    return (
        <>
            <h2 className={styles.title}>Larvish loot</h2>
            <div className={styles.products}>
                {productsData.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </>
    );
};
