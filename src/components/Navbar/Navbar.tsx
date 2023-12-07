import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { useCart } from 'src/context/ShoppingContext';
import { ShoppingCart, Sun, Moon } from '@phosphor-icons/react';
import Switch from 'react-switch';

import logo from 'src/assets/logo/owl.png';
import styles from './Navbar.module.scss';
import { useTheme } from 'src/context/ThemeContext';

export const Navbar = () => {
    const { openCart } = useCart();
    const { themeHandler, theme } = useTheme();

    const isDark: boolean = theme === 'dark';

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
                        <Switch
                            checked={isDark}
                            onChange={themeHandler}
                            className={styles.switch}
                            onColor="#2E4482"
                            checkedIcon={<Moon size={24} className={styles.moon} />}
                            uncheckedIcon={
                                <Sun
                                    size={23}
                                    className={styles.sun}
                                    color="#fff"
                                />
                            }
                        />
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
