import { useEffect, useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const title = "bonjours les gens masingacite";
const style = { color: "red"};
const showTitle = true;

const toDos = [
  'presenter React',
  'prsenter le jsx',
  'creer des composants'

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
  
console.log("false" , checked);

  const togglerCheck = () => {
    setChecked(!checked)
    console.log(checked);
  }

  return <form onSubmit={handlSubmit}>
      
    <input type='text' name='firstname'  onChange={handleOnchange} defaultValue={"test"}/>

    <input type='checkbox' name='check' checked={checked} onChange={togglerCheck}/>

    <button type='submit' disabled={!checked} > Submit</button>

  </form>
}


export default App
