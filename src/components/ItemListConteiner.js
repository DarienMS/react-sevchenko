import { useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = () => {

    const [productos, setproductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria

    
    useEffect(() => {
      pedirDatos()
      .then((res) => {
        if (categoria){
            setproductos(res.filter((prod)=> prod.categoria === categoria));
            setTitulo(categoria);
        }else{
            setproductos(res);
            setTitulo("Productos");
        }
        

      })
    }, [categoria])
    return (

        <div> <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}


export default ItemListConteiner