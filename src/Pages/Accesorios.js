import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import "./styles.css"

export default function Accesorios () {
    let tipoDeFiltro = "Accesorios"
    return (
        <div>
            <Navbar/>
            <h1>Esta es la seccion de {tipoDeFiltro}</h1>
            <ItemListContainer tipoDeFiltro={tipoDeFiltro}/>
        </div>
    )
}