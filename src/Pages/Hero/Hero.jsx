import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import './Hero.css'
const Hero = () => {
  return (
    <div className='Hero-Container'>
      <Navbar />
      <div className='MainHeroDiv'>
        <div className="card-section">
          <div className="card-section-top">
            <p className='textvis'>Visionary Leadership</p>
            <p className='textvis'>Digital Transformation</p>
            <p className='textvis'>Regulatory Navigation</p>
            <p className='textvis'>Strategy & Execution</p>
          </div>

          <div className="card-section-bottom">
            <p className='learntext'>I Learn, grow, and lead.<br />
              I dont just imagine a better future- I craft it.</p>
            <button className='lettalk'>
              Let’s Talk
            </button>
          </div>


        </div>

        <div className='valuediv'>
          <p className='valuetext'>
            Value Proposition Disclosures and Vision
          </p>
          <p className='valuetextdet'>
            I’m Abdullah, a business leader, strategist, and transformation advisor with a focus on building scalable, future-ready organizations across technology and finance.
          </p>
          <p className='textyear'>© 2025</p>
        </div>
      </div>
      <img src='/Images/Hero/Abdullah.webp' className='MainPicPerson' alt='' />
      <img src='/Images/Hero/TitlePic.png' className='titlePerson' alt='' />
    </div>
  )
}

export default Hero