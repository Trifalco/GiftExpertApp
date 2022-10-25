export const getGifs = async ( category) => {

    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=P4mjM59ghM5cgc69OjyoH4sf0TRGo3ki`;//encodeURI sirve para poder leer lo que me ingrese el usuario si tiene espacios.
    const peticion = await fetch(url);
    const { data } = await peticion.json();

    //del data le digo que en un map me traiga solamente 3 propiedades de cada data.... en este caso info es cada arreglo que aparezca en la busqueda.
    const gifts = data.map(info => {
      return {
        id: info.id,
        tittle: info.title,
        image: info.images?.downsized_medium.url//pongo el signo de interrogacion para preguntar si existen las images 
      }
    })
    return gifts;
  }