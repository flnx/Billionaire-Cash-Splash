import { Container } from 'src/components/Container/Container';
import { Product } from 'src/components/Products/Product';
import { useBillionaire } from 'src/context/BillionaireContext';

export const Inventory = () => {
    const { inventory } = useBillionaire();
    console.log(inventory);

    return (
        <Container>
            <div>
                {inventory.map((p) => (
                    <Product key={p.id} {...p} />
                ))}
            </div>
        </Container>
    );
};
