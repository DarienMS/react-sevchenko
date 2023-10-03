import './App.css';
import { Navbar } from './components/Navbar';
import ItemListConteiner, { Saludo } from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailConteiner';

function App() {
  return <div>
    <Navbar/>
    <div className="bienvenido-class">
      
      <ItemListConteiner />
      
      <ItemDetailContainer itemId={2} />
      </div>
    
    
  </div>
   
    
}

export default App;

