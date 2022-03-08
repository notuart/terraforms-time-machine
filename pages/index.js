import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Terraforms Time Machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Terraforms Time Machine
        </h1>

        <p className="mt-3 text-2xl">
          A visual exploration of the effect of time on the Mathcastles
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link 
            href={{
              pathname: '/[year]',
              query: { year: 0 },
            }}
          >
            <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 cursor-pointer">
              <h3 className="text-2xl font-bold">Explore &rarr;</h3>
              <p className="mt-4 text-xl">
                12 unofficial Terraforms across 5000 years at an interval of 100 years.
              </p>
            </div>
          </Link>

          <a
            href="https://docs.google.com/presentation/d/1v0ccwju6isFD8lIRKFyiPLxbVJhPCSmLLjxF3TBZG4I/edit#slide=id.g116deb5c225_33_19"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 cursor-pointer"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Jump into the Terraforms by Mathcastles rabbit hole.
            </p>
          </a>

          <a
            href="https://opensea.io/collection/terraforms"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 cursor-pointer"
          >
            <h3 className="text-2xl font-bold">Collection &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover the real Terraforms by Mathcastles on OpenSea.
            </p>
          </a>

          <a
            href="https://github.com/notuart/terraforms"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 cursor-pointer"
          >
            <h3 className="text-2xl font-bold">Code &rarr;</h3>
            <p className="mt-4 text-xl">
              Explore the contracts used to generate this experiment.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <a
          className="flex items-center justify-center"
          href="https://twitter.com/notuart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/notu.svg" alt="notu" className="h-6 ml-2" />
        </a>
      </footer>
    </div>
  )
}