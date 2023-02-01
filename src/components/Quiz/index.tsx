import styles from './styles.module.css';
import { QuizProps } from './types';

const QuizLayout = ({ children }: QuizProps) => {
    return (
        <section className={styles.content}>
            <div className={styles.content__right}>
                <div className={styles.questions}>
                    {children}
                </div>
            </div>

            <div className={styles.content__left}>

            </div>
        </section>
    )
}

export default QuizLayout;