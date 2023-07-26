import React from 'react';
import propTypes from 'prop-types';
import {BsFillCartPlusFill} from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ dados }){

  const{title, thumbnail, price} = dados;

  return(
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product" className="card__image" />

      <div className="card__infos">
        <h1 className="card__price">{formatCurrency(price)}</h1>
        <h1 className="card__title">{title}</h1>
      </div>
      <button type="button" className="button__add-cart">
        <BsFillCartPlusFill/>
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  dados: propTypes.shape({}),
}.isRequered;
