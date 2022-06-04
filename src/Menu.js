import React from 'react'
import './Menu.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import {HashRouter,Routes,Route} from 'react-router-dom'

const Menu = () => {
  return (
      <div>
    <div className='menu'>
        <a href="#/home">Home</a>
        <a href="#/about">About</a>
        <a href="#/contact">Contact</a>
        <a href="#/products">Products</a>
    </div>
    <HashRouter>
        <Routes>
            <Route path='home' element= {<Home/>} />
            <Route path='about' element= {<About/>} /> 
            <Route path='contact' element= {<Contact/>} /> 
            <Route path='products' element= {<Products/>} /> 

        </Routes>
    </HashRouter>
    </div>
  )
}

export default Menu