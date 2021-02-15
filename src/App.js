import Hero from './components/Hero'
import Filters from './components/Filters'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero></Hero>
      </header>
      <main>
        <Filters></Filters>
      </main>
    </div>
  );
}

export default App;
