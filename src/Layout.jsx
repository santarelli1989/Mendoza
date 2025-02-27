<<<<<<< Updated upstream
import React from 'react'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Hero from './componentes/Hero/Hero'
import Carousel from './componentes/Carousel/Carousel'
import Card from './componentes/Card/Card'

=======
import React from "react";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
>>>>>>> Stashed changes

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main" className="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

<<<<<<< Updated upstream
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
=======
export default Layout;
>>>>>>> Stashed changes
