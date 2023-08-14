import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Catalog } from './Catalog';
import { ProductDetail } from './ProductDetail';
import { ItemListContainer } from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <ItemListContainer />
     <Catalog />
     <ProductDetail />
    </>
  )
}

export default App
