import React from 'react'
import Mid_Cards from './../../Component/Mid_Cards/MidCards'
import Innovation from '../../Component/Innovation/Innovation'
import Awards from '../../Component/Awards/Awards'
import JourneyBeyondWork from '../../Component/JourneyBeyondWork/JourneyBeyond'
import Faq from '../../Component/Faq/Faq'
import Hero from '../Hero/Hero'
import About from '../About/About'
const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" ,overflowX:"hidden"}}>
      <Hero />
      <div style={{ width: "100%", background: "white", maxWidth: "1620px" ,overflowX:"hidden" }} className='HomePageContainerNewwww'>
        <About />
        <Mid_Cards />
        <Innovation />
        <Awards />
        <JourneyBeyondWork />

      </div>
      <Faq />
    </div>

  )
}

export default HomePage
