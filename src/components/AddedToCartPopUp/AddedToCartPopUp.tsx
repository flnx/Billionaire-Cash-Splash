import styles from './AddedToCartPopUp.module.scss';

type AddedToCartPopUpProps = {
    item: string;
};

export const AddedToCartPopUp = ({ item }: AddedToCartPopUpProps) => {
    return (
        <div className={styles.popup}>
            <span>{item} has been added to your cart</span>
        </div>
    );
};
