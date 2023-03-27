'use client';
import { useEffect, useState } from 'react'
import { PageNumbers } from '@/components/PageNumbers'
import { News } from './News';
import { Paginate } from '@/utils/Paginate'

const Area = () => {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10;

    useEffect(()=>{
        // Get All the Articles Details 
        const getPosts = async()=>{
        const data= await fetch(
            // 'https://jsonplaceholder.typicode.com/posts'
            // 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=d3d572148ab247a4b3dfe824bc3795d8'
            'https://newsapi.org/v2/top-headlines?country=us&apiKey=d3d572148ab247a4b3dfe824bc3795d8'
            // 'https://newsapi.org/v2/everything?q=apple&from=2023-03-24&to=2023-03-26&sortBy=popularity&apiKey=d3d572148ab247a4b3dfe824bc3795d8'
            ).then(res=> res.json())
        setPosts(data.articles.filter(article => article.urlToImage))
        }
        getPosts();
    }, [])
    
    const handlePageChange = page => setCurrentPage(page) ;
    const paginatePosts = Paginate(posts, currentPage, pageSize);

  return (
    <div>
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
    </div>
  )
}

export default Area;
