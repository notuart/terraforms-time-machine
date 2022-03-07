import { useRouter } from 'next/router'
import Link from 'next/link'

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

export const getStaticPaths = async () => {
  let paths = []

  for (let i = 0; i <= 5000; i += 100) {
    paths.push({
      params: {
        year: (i).toString(), 
      },
    })
  }

  return { paths, fallback: false };
};

export default function token() {
  const router = useRouter()
  const year = parseInt(router.query.year)
  const prev = year - 100 < 0 ? 5000 : year - 100
  const next = year + 100 > 5000 ? 0 : year + 100

  return (
    <>
      <Link
        href={{
          pathname: '/[year]',
          query: { 
            year: prev
          },
        }}
      >Prev.</Link>

      <h1>Year {year}</h1>
      {/* <Link>Next</Link> */}

      <Link
        href={{
          pathname: '/[year]',
          query: { 
            year: next, 
          },
        }}
      >Next</Link>
    </>
  )
}