import productsData from 'src/data/products.json';
import { Product } from './Product';

export const Products = () => {
    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            {productsData.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};
