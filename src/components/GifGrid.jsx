import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category}) => {

const { images, isLoading } = useFetchGifs( category);

// console.log( {images, isLoading } );

// const [images, setImages] = useState([]);

// const getImages = async() => {
//     const newImages = await getGifs(category);
//     setImages(newImages);
// }

// // el useEffect es para que una funcion no se ejecute nuevamne cuando hay cambios en el steate y cambia el component se redibuja el componente
// useEffect(() =>{
//     // getGifs(category);
//     getImages();
// },[])

  return (
    <>
        <h3>{  category }</h3>
        {/* {
            isLoading 
            ? (<h2>Cargando...</h2>)
            : null
        } */}
        {
            isLoading && (<h2>Cargando...</h2>)
        } 
        
        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                    key={ image.id }
                    { ...image }
                    // title={ image.title }
                    // url={ image.url }
                    />
                    // <li key={ id }>{  title } </li>       
                )) 
            }
        </div>
    </>
  )
}
