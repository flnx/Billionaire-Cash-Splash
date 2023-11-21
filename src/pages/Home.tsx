import { Container } from 'src/components/Container/Container';
import { Products } from 'src/components/Products/Products';
import { Showcase } from 'src/components/Showcase/Showcase';
import { useBillionaire } from 'src/context/BillionaireContext';

export const Home = () => {
    const { isBillionaireSelected } = useBillionaire();

    return (
        <Container>
            <Showcase />
            {isBillionaireSelected && <Products />}
        </Container>
    );
};
