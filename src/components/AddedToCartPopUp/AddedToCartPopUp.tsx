import styles from './AddedToCartPopUp.module.scss';

type AddedToCartPopUpProps = {
    item: string;
};

export const AddedToCartPopUp = ({ item }: AddedToCartPopUpProps) => {
    const isFinishOrder = item.includes('Congrats');

    return isFinishOrder ? (
        <p className={styles.popup}>
            <span>{item}</span>
        </p>
    ) : (
        <p className={styles.popup}>
            <span>{item}</span> has been added to your cart
        </p>
    );
};
