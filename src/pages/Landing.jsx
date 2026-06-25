import React from 'react'
import Navbar from '../components/landing/Navbar'
import HeroSection from '../components/landing/HeroSection'
import Features from '../components/landing/Features'
import PreviewSection from '../components/landing/PreviewSection'
import HowItWorks from '../components/landing/HowItWorks'
import Footer from '../components/landing/Footer'

const Landing = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Features />
        <PreviewSection />
        <HowItWorks />
        <Footer />
    </>
  )
}

export default Landing
