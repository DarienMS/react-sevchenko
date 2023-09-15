import './App.css';
import { Navbar } from './components/Navbar';
import { Saludo } from './components/ItemListConteiner';

function App() {
  return <div>
    <Navbar/>
    <div className="bienvenido-class">
      
      <Saludo Nombre= {"Pablo"} /></div>
    
    
  </div>
   
    
}

export default App;

