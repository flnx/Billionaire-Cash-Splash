import productsData from 'src/data/products.json';
import categories from 'src/data/categories.json';

import { Product } from './Product';

import styles from './Products.module.scss';
import { useState } from 'react';

export const Products = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const categoryHandler = (selectedCategory: string) => {
        setSelectedCategories((prev) => {
            if (prev.includes(selectedCategory)) {
                return prev.filter((c) => c !== selectedCategory);
            }

            return [...prev, selectedCategory];
        });
    };

    const filtered = productsData.filter((p) =>
        selectedCategories.includes(p.category)
    );

    const updated = filtered.length === 0 ? productsData : filtered;

    return (
        <section>
            <h2 className={styles.title}>Larvish loot</h2>
            <div className={styles.tags}>
                {categories.map((c: string) => (
                    <p
                        className={styles.tag}
                        onClick={() => categoryHandler(c)}
                    >
                        {c}
                    </p>
                ))}
            </div>
            <div className={styles.products}>
                {updated.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
};
