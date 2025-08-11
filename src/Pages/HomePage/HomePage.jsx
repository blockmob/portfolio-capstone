import React from 'react'
import Mid_Cards from './../../Component/Mid_Cards/MidCards'
import Innovation from '../../Component/Innovation/Innovation'
import Hero from '../Hero/Hero'
import Faq from '../Faq/Faq'

const HomePage = () => {
  return (
    <div style={{width:"100%",background:"white",maxWidth:"1920px"}}>
      <Hero/>
      <Mid_Cards />
      <Innovation/>
      <Faq/>
    </div>
  )
}

export default HomePage
