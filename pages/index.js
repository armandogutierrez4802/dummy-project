import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Dummy Next App  | Home</title>
        </Head>
        <Navbar />
        <h1 className={`${styles.title} ${styles.font}`}>Dummy Project Home Page</h1>
        <Link href="/about" className={styles.font}>
          Go to About
        </Link>
      </div>
    </>
  )
}
