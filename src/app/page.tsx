"use client"
import { Link } from '@/components'
import { useEffect } from 'react'
import styles from './styles/page.module.css'

export default function Home() {

  useEffect(() => {
    localStorage.removeItem('results') // Clear results
  }, [])


  return (
    <main className={styles.centeredContainer}>
      <span className={styles.badge}>
        v1.0
      </span>

      <div className={styles.textBlock}>
        <h1 className={styles.heading}>Personality Quiz</h1>
        <h4 className={styles.subtitle}>A simple quiz built with NextJS 13.</h4>
      </div>

      <Link href="/quiz"
        className={styles.button}>
        Get Started
      </Link>

    </main>
  )
}
