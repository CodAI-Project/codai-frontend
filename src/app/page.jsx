'use client'

import React from 'react'
import NavbarCustom from './components/NavbarCustom'
import BackgroundBlur from './components/BackgroundBlur'
import GenerativeAIContainer from './components/GenerativeAIContainer'
import SectionCard from './components/SectionCard'
import Partners from './components/Partners'
import Footer from './components/Footer'


export default function page() {
  return (
    <div>
      <BackgroundBlur />
      <NavbarCustom />
      <GenerativeAIContainer />
      <SectionCard />
      <Partners />
      <div className='py-10' />
      <Footer />

    </div>
  )
}
