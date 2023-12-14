import categories from 'src/data/categories.json';
import styles from './CategoryTags.module.scss';

type Props = {
    categoryHandler: (selectedCategory: string) => void;
    tags: string[];
};

export const CategoryTags = ({ tags, categoryHandler }: Props) => {
    return (
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
    );
};
