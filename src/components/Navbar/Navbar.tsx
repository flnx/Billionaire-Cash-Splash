import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import styles from './Navbar.module.scss';
import logo from 'src/assets/logo/owl.png';
import { useCart } from 'src/context/ShoppingContext';

export const Navbar = () => {
    const { openCart } = useCart();

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.navContainer}>
                    <div className="logo">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="owl logo"
                                height="60"
                                width="60"
                            />
                        </Link>
                    </div>
                    <nav>
                        <Link to="/store">Store</Link>
                        <div onClick={openCart}>Cart</div>
                    </nav>
                </div>
            </Container>
        </header>
    );
};
