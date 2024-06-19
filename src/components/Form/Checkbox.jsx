
function Checkbox( {checked,  onCheck, label, id} ) {
  
    return <div className="form-check">
      <input type='checkbox' className="form-check-input " checked={checked} onChange={(e) => onCheck(e.target.checked)}/>
      <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
  }

  export default Checkbox;