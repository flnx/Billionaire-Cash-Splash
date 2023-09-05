import { Container } from '../Container/Container';
import billionairesData from 'src/data/billionaires.json';

import styles from './Showcase.module.scss';

export const Showcase = () => {
    console.log(billionairesData);

    return (
        <section>
            <Container>
                <div className={styles.cards}></div>
            </Container>
        </section>
    );
};
