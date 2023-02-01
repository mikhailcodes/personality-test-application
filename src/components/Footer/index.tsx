import styles from './styles.module.css';
import { FooterProps } from './types';

const Footer = ({ route }: FooterProps) => {
    const footerStyles = route === '/' ? styles.footerHome : styles.footerText;
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={footerStyles}>Built for Teamway &copy; 2023, by Mikhail Arden.</p>
            </div>
        </footer>
    )
}

export default Footer;