import React from 'react'
import imgCarrito from '../../assets/icons/BolsoShop.png';
import './CartWidget.css';


const CartWidget = () => {
  return (
    <div className="cart-widget"> <img src={imgCarrito} alt="Carrito de compras" /> Shopping Cart</div>
  )

}

export default CartWidget;