import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import './Hero.css'
const Hero = () => {
  return (
    <div className='Hero-Container'>
      <Navbar />
      <div>
        <div className="card-section">
          <div className="card-section-top">
            <p className='textvis'>Visionary Leadership</p>
            <p className='textvis'>Digital Transformation</p>
            <p className='textvis'>Regulatory Navigation</p>
            <p className='textvis'>Strategy & Execution</p>
          </div>

          <div className="card-section-bottom">
            <p className='learntext'>I Learn, grow, and lead.
              I dont just imagine a better
              future- I craft it.</p>
            <button className='lettalk'>
              Let’s Talk
            </button>
          </div>


        </div>
<img src='/Images/Hero/checkfil.svg' alt=''/>
        <div>
          <p>
            VALUE PROPOSITION DISCLOSURES AND VISION
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero