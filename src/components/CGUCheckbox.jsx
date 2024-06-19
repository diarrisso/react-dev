
function CGUCheckbox( {checked,  onCheck} ) {
  
    return <div>
      <input type='checkbox' name='cgu' checked={checked} onChange={(e) => onCheck(e.target.checked)}/>
      <label>Accepter les CGU</label>
    </div>
  }

  export default CGUCheckbox;