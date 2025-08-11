import React from 'react'
import Mid_Cards from './../../Component/Mid_Cards/MidCards'
import Innovation from '../../Component/Innovation/Innovation'
import Hero from '../Hero/Hero'
import Faq from '../Faq/Faq'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Mid_Cards />
      <Innovation/>
      <Faq/>
    </div>
  )
}

export default HomePage
