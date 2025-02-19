import React from 'react'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Hero from './componentes/Hero/Hero'
import Carousel from './componentes/Carousel/Carousel'
import Card from './componentes/Card/Card'



const Layout = () => {
    return (
      <div className=''>
        <Header />
        <Hero/>
        <Carousel/>
        <Card/>
        <Footer />
      </div>
      
    )
  }
  
  export default Layout;