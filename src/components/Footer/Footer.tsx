import { Container } from '../Container/Container';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div>Footer</div>
            </Container>
        </footer>
    );
};
