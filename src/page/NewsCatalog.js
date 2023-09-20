import React, {useState,useEffect} from 'react';
import NewsElement from '../components/NewsElement';
import axios from 'axios';

const NewsCatalog = () =>{
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=326eb8f5e6764d72a5eb89f4036035e7'
    const [articles, setArticles] = useState([])
    useEffect(() => {
      const getArticles = async () =>{
      const response = await axios.get(url)
      setArticles(response.data.articles)
      // print here
      console.log(response)

      }
      getArticles();

    },[])
    return(
        <>
    <h1>Todays Headlines</h1>
  {
    articles.map((article,index)=>{
        return(
            <>
            <NewsElement key={index} title={article.title} 
            description={article.description} 
            content={article.content}
            url={article.url}
            urlToImage={article.urlToImage}
            />
            </>
        )
    })
  }

        </>
    )
}


export default NewsCatalog;