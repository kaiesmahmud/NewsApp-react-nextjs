'use client';
import Area from '@/components/Area';
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>News App - Nehal - 2023 - React(Nextjs)</title>
        <meta name="description" content="News App - Nehal - 2023 - React(Nextjs)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' capitalize min-h-[100vh]'>
        <div className='text-center mt-10'>
          <h1 className='text-xl lg:text-3xl font-semibold mb-5'>Nextjs - News App 2023</h1>
        </div>
        <Area />
      </main>
    </>
  )
}
