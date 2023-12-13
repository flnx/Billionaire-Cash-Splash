import { useBillionaire } from 'src/context/BillionaireContext';
import { useCart } from 'src/context/ShoppingContext';

import styles from './Card.module.scss';

type CardProps = {
    id: number;
    imgUrl: string;
    name: string;
    netWorth: number;
};

export const Card = ({ imgUrl, name, netWorth, id }: CardProps) => {
    const {
        selectBillionaire,
        billionaire,
        isBillionaireSelected,
        resetInventory,
    } = useBillionaire();

    const { clearCart } = useCart();

    const isCurrentlySelected = billionaire?.id === id;

    const selectBillionaireHandler = () => {
        
        if (isBillionaireSelected && billionaire?.name !== name) {
            const userConfirmed = window.confirm("Your shopping cart and inventory items will be reset. Are you sure you want to proceed?");
            if (!userConfirmed) return;

            resetInventory();
            clearCart();
        }

        selectBillionaire({ imgUrl, name, netWorth, id });
    };

    return (
        <div className={styles.card} onClick={selectBillionaireHandler}>
            <div className={styles.header}>
                <img src={imgUrl} alt={name} />
            </div>

            <div className={styles.body}>
                <h3>{name}</h3>
                <span aria-label="Net Worth">${netWorth.toLocaleString()}</span>
            </div>
            {isBillionaireSelected && (
                <div className={styles.selected}>
                    {isCurrentlySelected ? (
                        <span>SELECTED</span>
                    ) : (
                        <div className={styles.reselect}>
                            <span>RESELECT</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
