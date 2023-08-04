import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Dummy Next App</title>
        </Head>
        <h1 className={styles.h1}>Dummy Project Home Page</h1>
      </div>
    </>
  )
}
