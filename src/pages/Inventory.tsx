import { Container } from 'src/components/Container/Container';
import { InventoryItems } from 'src/components/InventoryItems/InventoryItems';
import { useBillionaire } from 'src/context/BillionaireContext';

export const Inventory = () => {
    const { inventory } = useBillionaire();

    return (
        <Container>
            <InventoryItems items={inventory} />
        </Container>
    );
};
