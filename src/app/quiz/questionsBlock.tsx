"use client"
import React, { useState } from 'react';
import Questions from '../../data/question';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

interface Answer {
    id: number;
    answer: string;
    value: number;
    details: string;
}

const QuestionsBlock = () => {
    const router = useRouter()
    const questions = Questions(); // Questions data

    const [questionIndex, setQuestionIndex] = useState(0); // Question index state to display questions

    const currentQuestion = questions[questionIndex]; // Current question to display question

    const [answers, setAnswers] = useState<any[]>([]); // Answer state to store answer weights

    const nextQuestion = () => { // Next question
        setQuestionIndex(questionIndex + 1);
    };

    const previousQuestion = () => { // Previous question
        setQuestionIndex(questionIndex - 1);
    };

    const isAnswered = (questionIndex: number) => { // Check if question is answered
        return answers[questionIndex] !== undefined;
    };


    const isAllAnswered = () => {
        return answers.length === questions.length; // check if all questions are answered
    };

    const calculateResult = () => {
        const average = answers.slice(0, 4).reduce((a, b) => a + b, 0) / 4;
        return average > 1 ? 'Extrovert' : 'Introvert';
    };

    /**
     * It takes an array of answers, calculates the result, and stores it in localStorage
     * @param {any[]} answers - any[] - this is the array of answers that the user has selected.
     */
    const storeAnswers = (answers: any[]) => {
        const results = JSON.parse(localStorage.getItem('results') || '[]');
        results.push({
            answers,
            result: calculateResult()
        });
        localStorage.setItem('results', JSON.stringify(results));
        setTimeout(() => {
            router.push("/results");
        }, 500);

    }


    return (
        <div className={styles.contentContainer}>
            <h2 className={styles.questionSteps}>
                Question {questionIndex + 1}/{questions.length}
            </h2>


            <h2 className={styles.questionLabel}>
                {currentQuestion.question}
            </h2>

            <div className={styles.answersBlock}>

                {Array.isArray(currentQuestion.answers) && currentQuestion.answers.map(({ id, answer, value, details }: Answer) => (
                    <button
                        className={` ${styles.answer}
                        ${isAnswered(questionIndex) && answers[questionIndex] === value ? styles.answerAnswered : ''}`}
                        key={id}
                        onClick={() => {
                            const nextAnswers = [...answers];
                            nextAnswers[questionIndex] = value;
                            setAnswers(nextAnswers);
                        }}>
                        <div className={styles.amswerInner}>
                            <div className={styles.large}>
                                <p className={styles.bold}> {answer}</p>
                            </div>
                            <div>
                                <p className={styles.details}> {details}</p>
                            </div>
                        </div>
                    </button>
                ))}

                {currentQuestion.type === 'short_answer' && (
                    <div className={styles.shortAnswer}>
                        <input
                            className={styles.shortAnswerInput}
                            type="text"
                            placeholder="Full name (This is a test, enter random letters lol)"
                            onChange={(e) => {
                                const nextAnswers = [...answers];
                                nextAnswers[questionIndex] = e.target.value;
                                setAnswers(nextAnswers);
                            }}
                        />
                    </div>
                )
                }
            </div>

            <div className={styles.buttons}>
                {questionIndex > 0 && (
                    <button className={styles.prevBtn}
                        onClick={() => {
                            previousQuestion();
                        }}>
                        <div className={styles.btn}>
                            <div className={styles.large}>
                                <p>Previous</p>
                            </div>
                        </div>
                    </button>
                )}

                {questionIndex < questions.length - 1 && isAnswered(questionIndex) && (
                    <button className={styles.nextBtn}
                        onClick={() => {
                            nextQuestion();
                        }}>
                        <div className={styles.btn}>
                            <div className={styles.large}>
                                <p>Next</p>
                            </div>
                        </div>
                    </button>
                )}

                {questionIndex == questions.length - 1 && isAllAnswered() && (
                    <button className={styles.nextBtn}
                        onClick={() => {
                            storeAnswers(answers);
                        }}>
                        <div className={styles.btn}>
                            <div className={styles.large}>
                                <p>View Results</p>
                            </div>
                        </div>
                    </button>
                )}
            </div>


        </div>
    )
}

export default QuestionsBlock