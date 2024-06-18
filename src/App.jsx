import { useState } from 'react'
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

const handleOnclick = () => {
  alert('salut tout le monde');
}


function App() {

  const [count, setCount] = useState(0)

  const [person, setPerson] = useState({
    firstname: "mamadi",
    lastname: "diarrisso",
    age: 18 


  })



const incrementAge = () => {

  setPerson({...person, age: person.age + 1,  firstname: person.firstname = "masingacite"})
}



const increment = () => {

  setCount((count) => count + 1)
}


  return (
    <>
      { 
          showTitle ? <Title color="green">Mon Composant</Title> : <p> no</p>
      }

      <ul>
        { toDos.map(todo =>(<li key={todo}>{todo}</li>))}
      </ul>

      <p> Compteur: {count}</p>
      <button onClick={increment}>Incremente</button>

      <p> Personne Age: {person.age}</p>
      <p> Personne  firstname: {person.firstname}</p>
      <button onClick={incrementAge}>Age Person Incremente</button>

     </>
  )
}


function Title ({ color, children , hidden, ...props }) {

  
  
  return <h1 onClick={handleOnclick}  style={{color: color}}>{children}</h1>
}

export default App
