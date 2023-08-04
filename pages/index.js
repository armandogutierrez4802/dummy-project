import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Dummy Next App  | Home</title>
        </Head>
        <h1 className={styles.h1}>Dummy Project Home Page</h1>
        <Link href="/about">
          Go to About
        </Link>
      </div>
    </>
  )
}
