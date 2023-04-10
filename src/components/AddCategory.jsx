import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    // para manterner el estado del input
    const [inputValue, setInputValue] = useState('');

    // 
    const onInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        // con el preventDefault no hace la actualizacion de la pagina
        e.preventDefault();
        // se valida que el input tenga valores sin ose retorna nada
        if( inputValue.trim().length <= 1) return;
        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    // <>
    <form onSubmit={(e) => onSubmit(e) }>
    <input 
        type="text"  
        placeholder="Buscar lugar"
        value={ inputValue }
        // cuando modifique el input ejecuto la funcio para modificar el valor del estado del input
        onChange={ onInputChange }/>
    </form>
    // </>
  )
}
