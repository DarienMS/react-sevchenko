import './App.css';
import { Navbar } from './components/Navbar';
import ItemListConteiner, { Saludo } from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailConteiner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';

function App() {
  return <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListConteiner />}/>
      <Route path="/item/:id" element={<ItemDetailContainer />}/>
      <Route path="/productos" element={<ItemListConteiner />} />
      <Route path="/productos/:categoria" element={<ItemListConteiner />} />
      <Route path="/Nosotros" element={<Nosotros />}/>
    </Routes>
    <div>
      
      
      </div>
    
    </BrowserRouter>
  </div>
   
    
}

export default App;

