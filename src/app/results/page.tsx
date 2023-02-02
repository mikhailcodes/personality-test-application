"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
interface Answer {
    answers: any[];
    result: string;
}


export default function Results() {
    const router = useRouter()
    const [data, setData] = useState<Answer[]>([]);

    useEffect(() => {
        const results = localStorage.getItem("results");
        if (results) {
            setData(JSON.parse(results));
        } else {
            router.push("/quiz");
        }
    }, [router]);

    function retakeTest() {
        localStorage.removeItem("results");
        setTimeout(() => {
            router.push("/quiz");
        }
            , 500);
    }



    return (
        <div className={styles.contentContainer}>
            {data.map((item, index) => (
                <div key={index} className={styles.resultBlock}>
                    <h1 className={styles.name}>{item.answers[4]}</h1>
                    <h2 className={styles.results}>Fortunately (or unfortunately?) you’re an {item.result}.</h2>
                </div>
            ))}

            <button onClick={retakeTest} className={styles.button}>
                Re-Take Quiz
            </button>


        </div>
    )
}

