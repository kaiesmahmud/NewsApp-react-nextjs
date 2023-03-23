import Head from 'next/head'

 const feed = ({pageNumber, Articles}) => {
    const newArticles = Articles?.slice((pageNumber*10), (pageNumber*10)+ 10)
    console.log(newArticles)
  return (
    <>
      <Head>
        <title>Feed page-{pageNumber} </title>
        <meta name="description" content="Employee of the month page by Nehal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-[100vh]'>
        <div className='mt-[100px] flex flex-col gap-8 justify-center items-center ' >
            {
                newArticles &&
                newArticles.map((article,i)=>(
                    <div key={i} className="flex flex-col justify-center items-start gap-5 max-w-[80vw] p-5 rounded bg-slate-200" >
                        {
                            article.urlToImage && 
                            <div className='w-[100%] rounded overflow-hidden'>
                                <img src={article.urlToImage} alt={article.title} className="w-full hover:scale-125 transition-all duration-200 ease-in" />
                            </div>
                        }
                        <h1 className='font-bold'>{article?.title || "no title"}</h1>
                        <p className='text-xs font-bold'>Author: {article.author || "no author" }</p>
                        <p className='opacity-80 text-lg'>{article?.description || "no description"}</p>
                        <p className='text-xs opacity-75'>{article.content || "no content" }</p>
                        <p className='font-bold text-xs'>{article.url}</p>
                    </div>
                ))
            }
            {
                !newArticles &&
                Articles?.map((article,i)=>(
                    <div key={i} >
                        <h1>{article?.title || "no title"}</h1>
                        <p>{article?.description || "no description"}</p>
                        {
                            article.urlToImage && 
                            <div>
                                <img src={article.urlToImage} alt={article.title} />
                            </div>
                        }
                        <p>{article.author || "no author" }</p>
                        <p>{article.content || "no content" }</p>
                    </div>
            ))}
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async (pageContext) => {
    const pageNumber = pageContext.query.pageId;
    if( !pageNumber || pageNumber < 1 || pageNumber > 5){
        return {
            props:{
                pageNumber:1,
                articles:[]
            }
        }
    }

    const ApiJson = await fetch(
        'https://newsapi.org/v2/everything?q=bitcoin&apiKey=d3d572148ab247a4b3dfe824bc3795d8'
    ).then(res=> res.json())

    return {
        props:{
            Articles: ApiJson.articles,
            pageNumber:Number.parseInt(pageNumber)
        }
    }
}

export default feed;