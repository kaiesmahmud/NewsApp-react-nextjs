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
      <main className=' capitalize'>
        <div className='text-center mt-10'>
          <h1 className='text-xl lg:text-3xl font-semibold'>Nextjs - News App 2023</h1>
          <p className='text-lg lg:text-xl font-extralight'>Your one stop shop for the latest news articles</p>
        </div>
         
      </main>
    </>
  )
}
