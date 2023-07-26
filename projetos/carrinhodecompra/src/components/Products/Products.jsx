import React, { useState, useEffect } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products(){

  const [products, setProducst] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) =>{
      setProducst(response);
    });
  }, []);

  return(
    <section className="products container">

      {
        products.map((product) => <ProductCard key={product.id} dados={product}/>)
      }
    </section>
  );
}

export default Products;
