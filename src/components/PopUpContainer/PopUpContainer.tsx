import styles from './PopUpContainer.module.scss';

type PopUpContainerProps = {
    children: React.ReactNode;
};

export const PopUpContainer = ({ children }: PopUpContainerProps) => {
    return ( 
        <div className={styles.container}>
            {children}
        </div>
    )
};
