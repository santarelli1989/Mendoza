import React from 'react'
import Hero from '../componentes/Hero/Hero'
import Carousel from '../componentes/Carousel/Carousel'
import Card from '../componentes/Card/Card'


function Inicio() {
  return (
    <>
    <Hero/>
    <Carousel/>
    <Card arrCard={arrCard} />
    </>
  )
}

export default Inicio