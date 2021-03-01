import Hero from './components/Hero'
import Filters from './components/Filters'
import ListProducts from './components/ListProducts'
import React, { useState ,createContext} from 'react';

export const shopContext = React.createContext();

function App() {
  const [user, setUser] = useState("")
  const [products, setProducts] = useState("")

  return (
    <shopContext.Provider
      value={{
        user,
        setUser,
        products,
        setProducts
      }}>
      <div className="App">
        <header className="App-header">
          <Hero></Hero>
        </header>
        <main>
          <Filters></Filters>
          <ListProducts></ListProducts>
        </main>
    </div>
    </shopContext.Provider>
  );
}

export default App;
