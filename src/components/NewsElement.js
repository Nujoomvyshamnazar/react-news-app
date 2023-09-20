import React from 'react';
import './NewsElement.css';
export default function NewsElement({title,description,content,url,urlToImage,key}) {
  return (
    <div className='newswebsite' >
        <div className='newselement'>
       <h3><a href={url}>{title}</a></h3>
       <img className='newsimage' src={urlToImage}  alt={urlToImage}  />
       <p className='desc'>{description}</p>
       <p className='content'>{content}</p>
       </div>

    </div>
  )
}
