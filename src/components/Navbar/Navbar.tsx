import logo from 'src/assets/logo/owl.png';

// Components
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { ShoppingCart, Sun, Moon } from '@phosphor-icons/react';

// Hooks
import { useCart } from 'src/context/ShoppingContext';
import { useTheme } from 'src/context/ThemeContext';

import styles from './Navbar.module.scss';

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
                            <img src={logo} alt="owl logo" height="60" width="60" />
                        </Link>
                    </div>
                    <nav>
                        <Switch
                            checked={isDark}
                            onChange={themeHandler}
                            className={styles.switch}
                            onColor="#2E4482"
                            checkedIcon={
                                <Moon
                                    size={25}
                                    className={styles.moon}
                                    color="#f0c420"
                                    weight="fill"
                                />
                            }
                            uncheckedIcon={
                                <Sun
                                    size={23}
                                    className={styles.sun}
                                    color="#fefcd7"
                                    weight="fill"
                                />
                            }
                        />
                        <Link to="/">Shop</Link>
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
