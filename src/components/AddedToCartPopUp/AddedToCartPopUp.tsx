import styles from './AddedToCartPopUp.module.scss';

type AddedToCartPopUpProps = {
    item: string;
};

export const AddedToCartPopUp = ({ item }: AddedToCartPopUpProps) => {
    return (
        <p className={styles.popup}>{item} has been added to your cart</p>
    );
};
