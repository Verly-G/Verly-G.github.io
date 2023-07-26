import React, { useContext } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton(){

  const { cartItems, isCardVisible, setIsCardVisible } = useContext(AppContext);

  return(
    <button type="button" className="cart__button" onClick={() => setIsCardVisible(!isCardVisible)}> 
      <AiOutlineShoppingCart/>
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
