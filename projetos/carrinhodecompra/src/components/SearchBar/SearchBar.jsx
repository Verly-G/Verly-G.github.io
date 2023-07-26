import React, {useState, useContext} from 'react';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';

import './SearchBar.css';
import AppContext from '../../context/AppContext';

function SearchBar(){

  const {setProducts, setLoading} = useContext(AppContext);
  const[searchValue, setSearchValue] = useState('');

  const pesquisa = async (event) =>{
    event.preventDefault();
    setLoading(true);
    const busca = await fetchProducts(searchValue);
    setProducts(busca);
    setLoading(false);
    setSearchValue('');
  };

  return(
    <form className="search-bar" onSubmit={pesquisa}>
      <input type="search"
        value={searchValue} 
        placeholder="Buscar Produtos"
        className="search__input"
        onChange={ ( {target} )=> setSearchValue(target.value) }
        required
      />
      <button type="submit" className="search__button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
