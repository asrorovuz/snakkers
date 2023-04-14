import React, { useState } from 'react'
import Basket from '../basket/Basket'
import Header from '../header/Header'
import './App.css'

export const App = () => {

  const [basket, setBasket] = useState(false)

  const showBasket = () => {
    setBasket(!basket)
  }

  const hideBasket = (e) => {
    if(e.target.classList.contains('wrapper')){
      setBasket(!basket)
    }
}

  return (
    <div className='App'>
      <Basket basket={basket} hideBasket={hideBasket}/>
      <main className='main container'> 
        <Header showBasket={showBasket}/> 
      </main>
    </div>
  )
}

