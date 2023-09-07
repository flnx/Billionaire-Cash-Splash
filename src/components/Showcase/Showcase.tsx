import { Container } from '../Container/Container';
import billionairesData from 'src/data/billionaires.json';

import styles from './Showcase.module.scss';
import { Card } from './Card';

export const Showcase = () => {
    return (
        <section>
            <Container>
                <h1 className={styles.title}>Pick a Billionaire. Raid Their Wallet. Live Large!</h1>
                <div className={styles.cards}>
                    {billionairesData.map((billionaire) => (
                        <Card key={billionaire.id} {...billionaire} />
                    ))}
                </div>
            </Container>
        </section>
    );
};
