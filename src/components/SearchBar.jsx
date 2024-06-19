import React from 'react'
import InputSearch from './Form/InputSearch'
import Checkbox from './Form/Checkbox'

export const SearchBar = ({showStockOnly, onStockedONlyChange, searchValue, onSearchChange}) => {


    return <div>
        <div className='mb-3'>
        <InputSearch  value={searchValue}  onChange={onSearchChange} placeholder='Search...' />
        <Checkbox label="Afficher que les produits qui sont en stocks"  checked={showStockOnly}  onCheck={onStockedONlyChange}/>
        </div>

    </div>

}
