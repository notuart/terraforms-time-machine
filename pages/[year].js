import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Year({ years }) {
  const router = useRouter()
  const current = parseInt(router.query.year)
  const prev = current - 100 < 0 ? 5000 : current - 100
  const next = current + 100 > 5000 ? 0 : current + 100

  const Terraform = ({ id }) => (
    <iframe
      className="flex w-1/4 aspect-square mt-24" 
      src={`data/${current}/${id}.html`}
    ></iframe>
  )

  return (
    <div className="flex w-full flex-col flex-wrap py-12">
      <div className="fixed flex items-center justify-center py-3 border-b py-6 bg-neutral-900" style={{ top: 0, width: "100%" }}>
        <Link
          href={{
            pathname: '/[year]',
            query: { 
              year: prev
            },
          }}
        >
          <button className="rounded-xl bg-neutral-800 leading-loose border border-neutral-800 px-3 mx-6">
            &larr; Previous
          </button>
        </Link>

        <h1 className="flex font-bold w-100 text-xl text-center w-auto">Year <br /> {current}</h1>

        <Link
          href={{
            pathname: '/[year]',
            query: { 
              year: next, 
            },
          }}
        >
          <button className="rounded-xl bg-neutral-800 leading-loose border border-neutral-800 px-3 mx-6">
            Next &rarr;
          </button>
        </Link>

        {/* <div className="self-end">
          Jump to:
          <select className="px-2 py-1 bg-black rounded">
            {years.map((y) => (
              <option key={`select-year-${y}`} value={y} onChange={e => current}>{y}</option>
            ))}
          </select>
        </div> */}
      </div>
      
      <div className="aspect-video flex items-center flex-wrap flex-row">
        {[...Array(12)].map((x, i) => <Terraform key={i} id={i + 1} />)}
      </div>
      <footer className="flex items-center justify-center w-full mt-12">
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