import Head from 'next/head'

const EOM = () => {
  return (
    <>
      <Head>
        <title>Employee of the month-- NewsApp - Nehal- 2023</title>
        <meta name="description" content="Employee of the month page by Nehal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-[100vh]'>
        <div className='mt-[100px] flex flex-col gap-8 justify-center items-center text-center' >
            <p className=' capitalize text-slate-800 text-[4vh]'>Employee of the month</p>
            <h3 className='text-lg lg:text-2xl font-extralight'>Kaies Mahmud Nehal</h3>
            <h6 className='font-bold opacity-60'>Full Stack Developer</h6>
            <div className='w-[300px]'>
                <img src="/nehal.jpg" alt="kaiesmahmud" className='rounded-full w-full' /> 
            <p className='mt-10 text-justify'>Lorem ipsum dolor sit amet consectetur adipis  icing elit. Quod consequuntur e, nam incidunt mollitia aliquid dignissimos voluptatum earum!</p>
            </div>
        </div>
      </main>
    </>
  )
}

export default EOM