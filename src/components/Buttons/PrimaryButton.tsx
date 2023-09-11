import styles from './PrimaryButton.module.scss';

type PrimaryButtonProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
};

export const PrimaryButton = ({ children, style }: PrimaryButtonProps) => {
    return (
        <button className={styles.btn} style={style}>
            {children}
        </button>
    );
};
