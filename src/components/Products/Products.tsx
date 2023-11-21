import productsData from 'src/data/products.json';
import { Product } from './Product';
import { useBillionaire } from 'src/context/BillionaireContext';

import styles from './Products.module.scss';

export const Products = () => {
    // const { isBillionaireSelected } = useBillionaire();

    return (
        <div className={styles.products}>
            {productsData.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};
