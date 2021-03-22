import Hero from './components/Hero'
import Filters from './components/Filters'
import ListProducts from './components/ListProducts'
import React, { useState ,createContext, useEffect} from 'react';
import usePagination from "./hooks/Pagination.js";
import Data from "./utils/getData.js";

export const shopContext = createContext();

function App() {
  const [user, setUser] = useState("")
  const [ redeemHistory , setReedemHistory ] = useState('')
  const [currentProduct, setCurrentProduct] = useState("")
  const [products, setProducts] = useState([])
  const pagination = usePagination(products,16)

  useEffect(()=>{
    async function getProducts () {
       const getProductsData = await Data.getProducts()
       setProducts(getProductsData)
   };
   async function getUser () {
    const getUserData = await Data.getUser()
    setUser(getUserData)
  };
  async function handleHistory () {
    let data = await Data.getHistory()
    setReedemHistory(data)
  } 
  getUser();
  getProducts();
  handleHistory();
},[]);
  return (
    <shopContext.Provider
      value={{
        user,
        setUser,
        currentProduct,
        setCurrentProduct,
        products,
        setProducts,
        redeemHistory,
        setReedemHistory,
        pagination
      }}>
      <div className="App">
        <header className="App-header">
          <Hero></Hero>
        </header>
        <main>
          {products.length !== 0 && <Filters show={true}/>}
          <ListProducts></ListProducts>
          {products.length !== 0 && <Filters/>}
        </main>
    </div>
    </shopContext.Provider>
  );
}

export default App;
