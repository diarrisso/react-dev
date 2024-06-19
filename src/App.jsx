import { useEffect, useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductTable from './components/Products/ProductTable'
import { SearchBar } from './components/SearchBar'
import SearchPriceRange from './components/Form/SearchPriceRange'

const title = "bonjours les gens masingacite";
const style = { color: "red"};
const showTitle = true;

  
function App() {


  const [duration, setDuration] = useState(50)
  const [secondsLeft, setSecondsLeft] = useState(duration)

const handleChange = (v) => {
  setDuration(v)
  setSecondsLeft(v)

}

  useEffect(() => {
 
      const timer = setInterval(()=> {
      
        setSecondsLeft( v => {
          if(v <= 1) {
            clearInterval(timer)
            return 0

          }

          return v - 1
    
        })

      }, 1000)

      return () => {
        clearInterval(timer)
      }


  }, [duration])

  return <div className="vstack">
    <h1 style={style}>{title}</h1>
    <input type="text" value={duration} onChange={handleChange} />
    <p> Decompte: {secondsLeft}</p>
  </div>
}

function Edite(){
  const [title, setTitle] = useState('')
  const [firstname, setFirstname] = useState('')

  useEffect(() => {

  }, [])

  return <div>
    <h1>{title}</h1>
    <input type="text" value={title} onChange={setTitle} />
    <input type="text" value={firstname} onChange={setFirstname} />
  </div>
}


export default App
