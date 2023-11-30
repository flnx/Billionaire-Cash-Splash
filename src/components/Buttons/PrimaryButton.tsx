import styles from './PrimaryButton.module.scss';

type PrimaryButtonProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    increaseCartQtyHandler: () => void;
};

export const PrimaryButton = ({
    children,
    style,
    increaseCartQtyHandler,
}: PrimaryButtonProps) => {
    return (
        <button
            className={styles.btn}
            style={style}
            onClick={increaseCartQtyHandler}
        >
            {children}
        </button>
    );
};
