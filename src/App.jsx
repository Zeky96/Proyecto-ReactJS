import { useState } from 'react'
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <ItemListContainer />
    </>
  )
}

export default App
