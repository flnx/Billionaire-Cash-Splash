import { Container } from '../Container/Container';
import { GithubLogo } from '@phosphor-icons/react';

import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <section className={styles.section}>
                    <div>
                        <p className={styles.intro}>Created By</p>
                            <a
                                href="https://github.com/flnx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.githubLink}
                            >
                                <GithubLogo size={28} weight="duotone" />
                                <span>Kaloyan Georgiev</span>
                            </a>
                    </div>
                </section>
            </Container>
        </footer>
    );
};
