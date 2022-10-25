import React, { useContext }  from 'react'
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/itemCount';
import "./styles.css" ;

function Item({item}) {
    const [stock, setStock] = useState(item.stock)
    const cartContext =useContext(CartContext)
    const {cart,addToCart} = cartContext
    
    const onAdd= (quantity) => {
        if(item.stock>=quantity){
            addToCart(item.quantity)
            item.stock=item.stock-quantity
            setStock(item.stock-quantity)
        } else {
            alert("No se puede agregar esa cantidad al carrito")
        }
    }
    

    return (
        <tr className="items">
                <td><img src={item.imagen} alt="Imagen Producto" className="imagenProducto"></img></td>
                <td className="nombreProducto"> <p>{item.nombre}</p></td>
                <td className="precioProducto"><p>{item.precio}</p></td>
                <td className="stockProducto"> <p>Disponibles: {item.stock}</p></td>
                <td> <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount></td>
                <td> <button>
                    <NavLink to={`/detalles/${item.id}`} className="NavLink">Ver Detalles</NavLink>    
                    </button>
                </td>
        </tr>
    )
}

export default Item


/*
To do 
la cantidad debe reiniciarse a 1 cuando se agregan productos al carrito
*/