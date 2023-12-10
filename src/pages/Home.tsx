// Components
import { ShoppingCart } from '@phosphor-icons/react';
import { Container } from 'src/components/Container/Container';
import { Products } from 'src/components/Products/Products';
import { Showcase } from 'src/components/Showcase/Showcase';

// Hooks
import { useBillionaire } from 'src/context/BillionaireContext';
import { useCart } from 'src/context/ShoppingContext';
import { useShowCartIcon } from 'src/hooks/useShowCartIcon';

export const Home = () => {
    const { isBillionaireSelected } = useBillionaire();
    const { openCart } = useCart();
    const { showCartIcon } = useShowCartIcon(200);

    return (
        <Container>
            <Showcase />
            {isBillionaireSelected && <Products />}

            {showCartIcon && (
                <ShoppingCart
                    size={44}
                    onClick={() => openCart()}
                    className="active"
                    weight="duotone"
                />
            )}
        </Container>
    );
};
