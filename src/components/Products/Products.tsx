import productsData from 'src/data/products.json';
import categories from 'src/data/categories.json';

import { Product } from './Product';
import { useMemo, useState } from 'react';

import styles from './Products.module.scss';

export const Products = () => {
    const [tags, setTags] = useState<string[]>([]);

    const categoryHandler = (selectedCategory: string) => {
        setTags((prev) =>
            prev.includes(selectedCategory)
                ? prev.filter((t) => t !== selectedCategory)
                : [...prev, selectedCategory]
        );
    };

    const filtered = useMemo(
        () => productsData.filter((p) => tags.includes(p.category)),
        [productsData, tags]
    );

    const updated = filtered.length === 0 ? productsData : filtered;

    return (
        <section>
            <h2 className={styles.title}>Larvish loot</h2>
            <div className={styles.tags}>
                {categories.map((c: string) => (
                    <p
                        className={`${styles.tag} ${tags.includes(c) ? styles.tagged : ''}`}
                        onClick={() => categoryHandler(c)}
                        key={c}
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
