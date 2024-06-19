import React from 'react'

const InputSearch = ( { placeholder, value, onChange}) => {
  return (
    <input  className="form-control" type='search'  placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default InputSearch
