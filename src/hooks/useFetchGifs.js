import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
}

// el useEffect es para que una funcion no se ejecute nuevamne cuando hay cambios en el steate y cambia el component se redibuja el componente
useEffect(() =>{
    // getGifs(category);
    getImages();
},[])

return {
    images: images,
    isLoading
}
}
