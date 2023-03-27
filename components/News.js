import { motion } from "framer-motion"
export const News = ({posts}) => {
  return (
    <div className=' flex flex-col gap-8 justify-center items-center  h-full '>
        {
            posts.map((article,i) =>(
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                key={i} 
                className=" overflow-hidden flex flex-col justify-center items-start gap-5 max-w-[80vw] p-5 rounded bg-slate-200 text-justify" >
                        {
                            article.urlToImage && 
                            <div className='w-[100%] rounded overflow-hidden'>
                                <img src={article.urlToImage} alt={article.title} className="w-full hover:scale-125 transition-all duration-200 ease-in" />
                            </div>
                        }{
                            !article.urlToImage && <div>No image</div>
                        }
                        <h1 className='font-bold'>{article?.title || "no title"}</h1>
                        <p className='text-xs font-bold'>Author: {article.author || "no author" }</p>
                        <p className='opacity-80 text-lg'>{article?.description || "no description"}</p>
                        <p className='text-xs opacity-75'>{article.content || "no content" }</p>
                        {/* <p className='font-bold text-xs'>{article.url}</p> */}
                    </motion.div>
            ) )
        }
    </div>
  )
}
