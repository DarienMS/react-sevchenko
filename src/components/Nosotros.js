

import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>Somos una empresa de alimentos ubicada en la ciudad de Resistencia-Chaco.</p>
        <div className='nosotros-img'>
          <img src='https://pbs.twimg.com/profile_images/1013543562540183552/bKfuAtsA_400x400.jpg'/>
        </div>
    </div>
  )
}

export default Nosotros