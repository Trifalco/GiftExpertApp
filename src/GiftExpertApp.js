import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpert = () => {

    //const categoria=["one Punch","Samurai X","Dragon Ball","Attack Of Titan"]
    const [categoria, setCategorias] = useState(["one Punch"])

    /* const AddHero=()=>{
        setCategorias([...categoria,"Kimetzu no yaiba"])//para cambiar el estado actual o agregar nuevos elementos al array se puede utilizar el spreet operator o creando una callback llamando el mismo arreglo y agregando dicho elemento nuevo.
        setCategorias(cats=>[...cats,"no manches"]);
    }; */

    return (
        <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategorias={setCategorias}/>{/*puedo mandar metodos que esten en el componente actual*/}
        <hr></hr>
        {/* <button onClick={AddHero}>Agregando</button> */}
        <ol>
        {
            categoria.map(category=>
                 <GifGrid category={category}
                    key={category}
                />
                )
        }

        </ol>
        </>
    );
}

