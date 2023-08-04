import Head from 'next/head'
import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <div>
                <Head>
                    <title>Dummy Next App | About</title>
                </Head>
                <h2 className={styles.h2}>Dummy Project About</h2>
                <Link href="/">Go to Home</Link>
            </div>
        </>
    )
}