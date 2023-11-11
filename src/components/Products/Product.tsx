// import { PrimaryButton } from '../Buttons/PrimaryButton';
import { useCart } from 'src/context/ShoppingContext';
import { QuantityBar } from '../QuantityBar/QuantityBar';
import styles from './Product.module.scss';

type ProductProps = {
    id: number;
    name: string;
    price: number;
    imageUrls: string[];
};

export const Product = ({ name, price, imageUrls, id }: ProductProps) => {
    const { state, increaseCartQty } = useCart();

    console.log(state);
    console.log(increaseCartQty);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={imageUrls[0]} alt={name} />
            </div>

            <div className={styles.body}>
                <h3>{name}</h3>
                <span aria-label="Price">{price}</span>
            </div>

            <div className={styles.footer}>
                {/* <PrimaryButton>+ Add To Cart</PrimaryButton> */}
            </div>

            {/* <QuantityBar id={id} /> */}
        </div>
    );
};
