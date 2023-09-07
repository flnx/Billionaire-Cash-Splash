import { Container } from 'src/components/Container/Container';
import { Products } from 'src/components/Products/Products';
import { Showcase } from 'src/components/Showcase/Showcase';

export const Home = () => {
    return (
        <Container>
            <Showcase />
            <Products />
        </Container>
    );
};
