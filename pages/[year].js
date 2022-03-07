import { useRouter } from 'next/router'
import Link from 'next/link'

export const getStaticProps = async () => {
  let years = []

  for (let i = 0; i <= 5000; i += 100) {
    years.push(i)
  }

  return {
    props: {
      years: years,
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

export default function token({ years }) {
  const router = useRouter()
  const current = parseInt(router.query.year)
  const prev = current - 100 < 0 ? 5000 : current - 100
  const next = current + 100 > 5000 ? 0 : current + 100

  return (
    <>
      <div className="flex items-center justify-center py-3 border-b py-6">
        <Link
          href={{
            pathname: '/[year]',
            query: { 
              year: prev
            },
          }}
        >
          <button className="rounded-xl bg-black border border-neutral-800 py-1 px-3">
            Previous
          </button>
        </Link>

        <h1 className="flex font-bold w-100">Year {current}</h1>

        <Link
          href={{
            pathname: '/[year]',
            query: { 
              year: next, 
            },
          }}
        >
          <button className="rounded-xl bg-black border border-neutral-800 py-1 px-3">
            Next
          </button>
        </Link>

        <div className="self-end">
          Jump to:
          <select className="px-2 py-1 bg-black rounded">
            {years.map((y) => (
              <option key={`select-year-${y}`} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <iframe src={`https://raw.githubusercontent.com/notuart/terraforms/main/terraforms-snapshots/001-decay/0/1.html`}></iframe>
      </div>
    </>
  )
}