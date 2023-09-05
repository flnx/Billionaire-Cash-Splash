import { Container } from '../Container/Container';
import billionairesData from 'src/data/billionaires.json';

import styles from './Showcase.module.scss';
import { Card } from './Card';



export const Showcase = () => {
    return (
        <section>
            <Container>
                <div className={styles.cards}>
                    {billionairesData.map((billionaire) => (
                        <Card 
                            key={billionaire.id} {...billionaire} 
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
