import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {//siempre debo desestructurar los metodos que necesito en mi componente

    const [inputValue, setInputValue] = useState('');

    //esta funcion me cambia el estado de mi use state
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);//el valor que ingrese el usuario.
    };
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){//trim me permite quitar los espacios que ingrese el usuario al inicio y al final de la palabra.

          setCategorias(cats=>[inputValue,...cats,]);//el codigo para agregar mas valores a la lista.
          setInputValue("");
        }
        }
       



  return (
    <form onSubmit={handleSubmit}>{/*handleSubmit es el nombre de la funcion que me agrega un nuevo valor a la lista en este caso las categorias.. */}
    <h1>{inputValue}</h1>
    <input type="text" value={inputValue} onChange={handleInputChange}></input>{/*cuando sufra cambio el input (evento onchange) */}
    </form>
  )
}

AddCategory.propTypes={
  setCategorias: PropTypes.func.isRequired,//en esta linea de codigo le digo al usuario que la funcion que espero como argumento en este componente llamada setCategoria sea requrida obligatoriamente para usar este componente..
}



