import React from 'react'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'



const Layout = ({children}) => {
    return (
      <div className=''>
        <Header />
        {children}
        <Footer />
      </div>
      
    )
  }
  
  export default Layout;