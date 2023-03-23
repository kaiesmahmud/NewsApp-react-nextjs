
const index = ({articles}) => {
  return (
    <div>Feed Index</div>
  )
}
export const getServerSideProps = async()=>{
    const ApiJson = await fetch(
        'https://newsapi.org/v2/everything?q=bitcoin&apiKey=d3d572148ab247a4b3dfe824bc3795d8'
    ).then(res=> res.json())

    return {
        props:{
            articles: ApiJson.articles,
            
        }
    }
}

export default index