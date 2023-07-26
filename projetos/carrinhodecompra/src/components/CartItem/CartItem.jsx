import React, { useContext } from 'react';
import propTypes from 'prop-types';
import {BsCartDashFill} from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

import './CartItem.css';

function CartItem({ data }){

  const {cartItems, setCartItems} = useContext(AppContext);
  const {id,thumbnail,title,price } = data;
  const handleRemoveItem = () =>{
    const updateItems = cartItems.filter((item) => item.id != id);
    setCartItems(updateItems);
  };

  return(
    <section className="cart-item">
      <img 
        src={thumbnail} 
        alt="Imagem do Produto" 
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h1 className="cart-item-title">{title}</h1>
        <h1 className="cart-item-price">{formatCurrency(price)}</h1>
        <button 
          type="button" 
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <BsCartDashFill/>
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
