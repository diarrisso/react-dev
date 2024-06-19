
function SearchPriceRange( {min,  max, label, id, onPriceRangeChange,  priceRange} ) {
  
    return <div className="form-check">
      <input type='range' className="form-range" value={priceRange} min={min} max={max} onChange={onPriceRangeChange}/>
      <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
  }

  export default SearchPriceRange;