import React from "react";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Hero from "./componentes/Hero/Hero";
import Carousel from "./componentes/Carousel/Carousel";
import Card from "./componentes/Card/Card";

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

export default Layout;
