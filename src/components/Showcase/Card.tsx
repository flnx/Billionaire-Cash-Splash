import { useBillionaire } from 'src/context/BillionaireContext';
import styles from './Card.module.scss';

type CardProps = {
    id: number;
    imgUrl: string;
    name: string;
    netWorth: number;
};

export const Card = ({ imgUrl, name, netWorth, id }: CardProps) => {
    const { selectBillionaire, billionaire } = useBillionaire();

    const isCurrentlySelected = billionaire?.id === id;

    return (
        <div
            className={styles.card}
            onClick={() => selectBillionaire({ imgUrl, name, netWorth, id })}
        >
            <div className={styles.header}>
                <img src={imgUrl} alt={name} />
            </div>

            <div className={styles.body}>
                <h3>{name}</h3>
                <span aria-label="Net Worth">{netWorth}</span>
                {isCurrentlySelected ? "LOL" : ''}
            </div>
        </div>
    );
};
