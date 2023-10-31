import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

export const Navbar = () => {
return   <div>
     <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"> 
                    <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                    </li>
                    <li class="nav-item"> 
                    <Link class="nav-link active" aria-current="page" to="/Nosotros">Nosotros</Link>
                    </li>
                    <li class="nav-item">
                         <Link class="nav-link active" aria-current="page" to="/Productos">Productos</Link>
                         </li>
                         <li class="nav-item">
                         <Link class="nav-link active" aria-current="page" to="/Productos/tragos">Tragos</Link>
                         </li>
                         <li class="nav-item">
                         <Link class="nav-link active" aria-current="page" to="/Productos/platos">Platos</Link>
                         </li>
                         <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/contacto">Contacto</Link></li>
                         <li className='Carrito-style'><CartWidget /></li>
                         </ul>
                         <div>
                            
                                            </div>
                                            </div>
                                            </div>
                                            </nav>


</div>



}



