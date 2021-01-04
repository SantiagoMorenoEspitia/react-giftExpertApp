import React from 'react'
//rafc 
export const GifGridItem = ({id,title,url}) => {
    console.log({id,title,url})
    return (
        <div className = "animate__animated animate__bounce">
            <img src= {url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
