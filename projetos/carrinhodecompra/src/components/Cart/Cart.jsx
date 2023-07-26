import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';

import './Cart.css';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart(){

  const{ cartItems, isCardVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => acc += item.price, 0);

  return(
    <section className={`cart ${isCardVisible ? 'cart--active': ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)}
      </div>
      <div className="cart-resume">{formatCurrency(totalPrice)}</div>
    </section>
  );
}

export default Cart;
