import { useEffect, useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CGUCheckbox from './components/CGUCheckbox'
import InputSearch from './components/InputSearch'
import './App.css'

const title = "bonjours les gens masingacite";
const style = { color: "red"};
const showTitle = true;

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: 'Appple' },
  { category: "Fruits", price: "$2", stocked: true, name: 'Banana' },
  { category: "Fruits", price: "$3", stocked: false, name: 'Cherry' },
  { category: "Fruits", price: "$4", stocked: true, name: 'Date' },
  { category: "Vegetables", price: "$5", stocked: true, name: 'Eggplant' },
  { category: "Vegetables", price: "$6", stocked: false, name: 'Fennel' },
  { category: "Vegetables", price: "$7", stocked: true, name: 'Garlic' },
  { category: "Vegetables", price: "$8", stocked: true, name: 'Horse radish'}

]


function App() {


const handleOnchange = (e) => {
 
  setFirstname(e.target.value)
}

const handlSubmit = (e) => {
  e.preventDefault()
  console.log("salut", new FormData(e.target).get('firstname'))
}


const reset = () => {
  setFirstname('')
}

  const [ firstname, setFirstname] = useState('masingacite diarriso') 

  const [checked, setChecked] = useState(false);
  const [isTermsAccepte, setIsTermsAccepte] = useState(false);
  
console.log("false" , checked);

  const togglerCheck = () => {
    setChecked(!checked)
    console.log(checked);
  }

  return <form onSubmit={handlSubmit}>
      
    <input type='text' name='firstname'  onChange={handleOnchange} defaultValue={"test"}/>

    <input type='checkbox' name='check' checked={checked} onChange={togglerCheck}/>

    <CGUCheckbox checked={isTermsAccepte} onCheck={setIsTermsAccepte} />

    <button type='submit' disabled={!checked && !isTermsAccepte} > Submit</button>


  </form>
}

export default App
