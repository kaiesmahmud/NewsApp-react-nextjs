import React from 'react'
import Head from 'next/head'
import { News } from '@/components/News'
import { PageNumbers } from '@/components/PageNumbers'
import { Paginate } from '@/utils/Paginate'

import { useEffect, useState } from 'react'

export default function Home({articles}) {

  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10;
  useEffect(()=>{
   setPosts(articles)

  },[])
  
  const handlePageChange = page => setCurrentPage(page) ;
  const paginatePosts = Paginate(posts, currentPage, pageSize);

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
        <div>

         {
           paginatePosts &&
           <News posts={paginatePosts} />
          }
        </div>
         <PageNumbers
          items={posts.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          />
      </main>
    </>
  )
}
export const getServerSideProps =async ()=>{
  const data= await fetch(
    // 'https://jsonplaceholder.typicode.com/posts'
    // 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=d3d572148ab247a4b3dfe824bc3795d8'
    // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d3d572148ab247a4b3dfe824bc3795d8'
    'https://newsapi.org/v2/everything?q=apple&from=2023-03-24&to=2023-03-26&sortBy=popularity&apiKey=d3d572148ab247a4b3dfe824bc3795d8'
    ).then(res=> res.json())
    return {
      props:{
        articles: data.articles.filter(article => article.urlToImage)
      }
    }
}
