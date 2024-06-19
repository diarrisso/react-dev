import { useEffect, useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductTable from './components/Products/ProductTable'
import { SearchBar } from './components/SearchBar'
import SearchPriceRange from './components/Form/SearchPriceRange'

const title = "bonjours les gens masingacite";
const style = { color: "red"};
const showTitle = true;
const PRODUCTS = [
    { category: "Fruits", price: 51, stocked: true, name: 'Appple' },
    { category: "Fruits", price: 85, stocked: true, name: 'Banana' },
    { category: "Fruits", price: 53, stocked: false, name: 'Cherry' },
    { category: "Fruits", price: 53, stocked: true, name: 'Date' },
    { category: "Vegetables", price: 155, stocked: true, name: 'Eggplant' },
    { category: "Vegetables", price: 56, stocked: false, name: 'Fennel' },
    { category: "Vegetables", price: 75, stocked: true, name: 'Garlic' },
    { category: "Vegetables", price: 1, stocked: true, name: 'Horse radish' }
  ];
  
function App() {

    const [showStockOnly, setShowStockOnly] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [priceRange, setPriceRange] = useState([0, 100])

   
    console.log(priceRange);

    const visibleProducts = PRODUCTS.filter(product => {


        if (showStockOnly && !product.stocked) {
            return false;
        }

        if (searchValue && !product.name.toLowerCase().includes(searchValue.toLowerCase())) {   
            return false;
        }

        if (product.price < priceRange[0] || product.price > priceRange[1]) {
            return false;
        }
        
        return true;
    })


  return <div className="container">
    <header className="App-header">
      <img src={reactLogo} className="App-logo" alt="logo" />
      <img src={viteLogo} className="App-logo" alt="logo" />
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <p style={style}>
        {showTitle && title}
      </p>
      
        <div className='container'>
            <h1>Products</h1>   
            <SearchBar
                showStockOnly={showStockOnly} 
                onStockedONlyChange={setShowStockOnly} 
                searchValue={searchValue} 
                onSearchChange={(e) => setSearchValue(e.target.value)}
            />

            <SearchPriceRange  
                label="filtre les produits par price"
                id="range" 
                max={100}
                min={0} 
                priceRange={priceRange} 
                onPriceRangeChange={(e) => setPriceRange(e.target.value)}
            />
        
            <ProductTable
              products={visibleProducts}
            />
        </div>
      
      
    </header>
  </div>
}

export default App
