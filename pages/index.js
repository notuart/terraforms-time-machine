import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/App.module.css'

export const getStaticProps = async () => {
  let years = []

  for (let i = 0; i <= 5000; i += 100) {
    years.push(i)
  }

  return {
    props: {
      years: Array.from(Array(5000).keys()),
    },
  };
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exploring Terraforms</title>
        <meta name="description" content="Travel through time and Terraforms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exploring Terraforms<br />
          Time travel
        </h1>

        <p className={styles.description}>
          Time travel through snapshots of ficticious Terraforms by Mathcastles<br /> generated with slightly altered original contracts.
        </p>

        <div className={styles.grid}>
            <Link 
              key={`snapshot-link-${i}`}
              href={{
                pathname: '/[year]',
                query: { year: 0 },
              }}
            >
              <div className={styles.card}>
                <h2>Snapshot #1 &rarr;</h2>
                <p>Snapshot of 12 Terraforms across 5000 years at an interval of 100 {5000/100} years.</p>
              </div>
            </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
