import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExportApp = () => {

  const [categories, setCategories] = useState([]);

  // desde el add category se llama esta funcion para mdificar el estao de categorias
  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
    }


  return (
    <>
    {/* titulo */}
    <h1>GifExportApp</h1>

    {/* Input */}
    <AddCategory 
    // se envia una funcion al componente addcategory
    onNewCategory={ (valorn) => onAddCategory(valorn)}
    />

    {/* Listado de Gif */}
    {/* <button onClick={ onAddCategory }>Agregar</button> */}
    {/* Lista de categorias */}
    {/* <ol> */}
      { categories.map((category) =>{
        return (
          // <div key={ category }>
          //   <h3>{ category }</h3>
          //   <li>{ category }</li>
          // </div>
          <GifGrid key={ category } category={ category }/>
        )
      }) }
      {/* <li>ABC</li> */}
    {/* </ol> */}

    </>
  )
}
