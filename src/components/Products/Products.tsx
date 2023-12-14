import productsData from 'src/data/products.json';

// Components
import { Product } from './Product';
import { CategoryTags } from 'src/components/CategoryTags/CategoryTags';


// Hooks
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
            <h2 className={styles.title}>Lavish loot</h2>
            <CategoryTags categoryHandler={categoryHandler} tags={tags} />
           
            <div className={styles.products}>
                {updated.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
};
