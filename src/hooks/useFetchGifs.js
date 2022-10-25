import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

//los hooks no  jsx.
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    //el use efect dara ciclos de vida a los componentes en este caso get gifs solo se usara siempre y cuando mi category se cambie.
    useEffect(() => {
        getGifs(category)//pasandole la categoria para que me haga la peticion
            .then(imgs => {
                setInterval(() => {
                    console.log(imgs)
                    setState({
                        data: imgs,
                        loading: false
                    });
 
                }, 2000);

            })
    }, [category])




    return state;

}
