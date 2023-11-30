import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { useCart } from 'src/context/ShoppingContext';
import { ShoppingCart } from '@phosphor-icons/react';

import logo from 'src/assets/logo/owl.png';
import styles from './Navbar.module.scss';

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
                        <Link to="/inventory">Inventory</Link>
                        <ShoppingCart
                            size={32}
                            onClick={() => openCart()}
                            className="pointer"
                        />
                    </nav>
                </div>
            </Container>
        </header>
    );
};
