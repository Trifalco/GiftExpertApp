import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  //const [count,setCount]=useState(0);//cuando nosotros agregamos un useState dentro de una peticion fetch, ocurrira un problema el cual es que cada vez que el estado se cambie , la peticion se volvera ha hacer, debido a esto se usara el useEfect
  const {data:images,loading}=useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    {loading && <p className='animate__animated animate__flash'>Loading</p>}{/* */}
    <div className='card-grid'>
    
      {
        images.map(img => (//desestructuro lo que necesito de mi estado.
          <GifGridItem
            key={img.id}
            {...img}//para hacer menos tedioso el codigo y hace poder mandar toda la informacion directamente a mi siguiente comp   onente
          />
        ))
      }

    </div>
    </>
  )

}
