import Head from 'next/head'
import styles from '../styles/About.module.css'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function About() {
    return (
        <>
            <div>
                <Head>
                    <title>Dummy Next App | About</title>
                </Head>
                <Navbar />
                <h2 className={styles.h2}>Dummy Project About</h2>
                <Link href="/">Go to Home</Link>
            </div>
        </>
    )
}