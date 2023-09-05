import styles from './Card.module.scss';

type CardProps = {
    imgUrl: string;
    name: string;
    netWorth: number;
};

export const Card = ({ imgUrl, name, netWorth }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={imgUrl} alt={name} />
            </div>

            <div className={styles.body}>
                <h3>{name}</h3>
                <span aria-label="Net Worth">{netWorth}</span>
            </div>
        </div>
    );
};
