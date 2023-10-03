import { useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListConteiner = () => {

    const [productos, setproductos] = useState([]);

    
    useEffect(() => {
      pedirDatos()
      .then((res) => {
        setproductos(res);

      })
    }, [])
    return (

        <div> <ItemList productos={productos} />
        </div>
    )
}


export default ItemListConteiner