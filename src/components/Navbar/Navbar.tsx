import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { Container } from '../Container/Container';

export const Navbar = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.navContainer}>
                    <div className="logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <nav>
                        <Link to="/store">Store</Link>
                        <div>Cart</div>
                    </nav>
                </div>
            </Container>
        </header>
    );
};
