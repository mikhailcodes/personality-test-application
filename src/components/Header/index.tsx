
import styles from './styles.module.css';
import { HeaderProps } from './types';

import { Link, Image } from '@/components';

const Header = ({ route }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav} aria-label="Top">
                <div className={`${styles.navContainer} ${route != '/' ? 'justify-between' : 'justify-center'}`}>
                    <div className={styles.flexCentered}>
                        <Link href="/">
                            <Image src="/example_logo.png" alt="Logo" width={150} height={50} />
                        </Link>
                    </div>

                    {route != '/' && (
                        <div className={styles.btnContainer}>
                            <Link className={styles.button}>
                                Restart Test
                            </Link>

                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header;