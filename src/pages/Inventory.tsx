import { Container } from 'src/components/Container/Container';
import { useBillionaire } from 'src/context/BillionaireContext';

export const Inventory = () => {
    const { inventory } = useBillionaire();
    console.log(inventory);

    return (
        <Container>
            <div>
                Hell0 there
            </div>
        </Container>
    );
};
