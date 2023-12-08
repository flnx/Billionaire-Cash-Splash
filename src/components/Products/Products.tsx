import productsData from 'src/data/products.json';
import { Product } from './Product';

import styles from './Products.module.scss';

export const Products = () => {

    return (
        <div className={styles.products}>
            {productsData.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};
