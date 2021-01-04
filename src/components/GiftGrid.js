import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFechGifts } from '../hooks/useFetchGifts';
export const GiftGrid = ({category}) => {

    const {data:images, loading} = useFechGifts(category);//cada vez que el componente cambie se ejecuta esto 

    //const [count, setCount] = useState(0);
    //  const [images, setImages] = useState([]);

    return (
        <>
        <h3 className = "animate__animated animate__bounce">category</h3>
        {loading && <p className="animate_animated animate_flash">Loading</p>}
        { <div className="card-grid">
              {
                  images.map(img=>(
                      <GifGridItem 
                      key = {img.id}
                        {...img}></GifGridItem>
                  ))
              }
        </div>} 
        </>
    )
}
