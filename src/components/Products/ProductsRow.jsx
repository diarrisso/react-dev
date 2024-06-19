import React from 'react'

const ProductsRow = ( {product, isStock = true}) => {

  const style =  product.stocked ? undefined : { color: 'red'}
  return<tr>
       { isStock && <td style={style}>{product.name}</td>}
      <td>{product.price}</td>
    </tr>
  
  
  
}

export default ProductsRow