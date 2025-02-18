import React from 'react'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Hero from './componentes/Hero/Hero'


const Layout = () => {
    return (
      <div className='container'>
        <Header />
        <Hero/>
        <Footer />
      </div>
      
    )
  }
  
  export default Layout;