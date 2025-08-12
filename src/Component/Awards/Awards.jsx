import React from 'react'
import './Awards.css'

const Awards = () => {
  return (
    <div className='awards-container' id='Recognitions'>
      <div className='awards-header' data-aos="fade-down">
        <div className="aboutdiv" >
          <p className="about-section-number">05/</p>
          <p className="about-section-number">Recognitions</p>
        </div>
        <p className='awards-title'>
          AWARDS &<br /> DISTINCTIONS
        </p>
      </div>

      <div className='awards-grid'>
        <div className='award-box award-box-light' data-aos="zoom-in">
          <h3 className='award-title'>Most Outstanding Member - JCI Syria</h3>
          <p className='award-description'>
            Recognized for exceptional leadership, initiative, and service
            within JCI Syria, contributing meaningfully to national programs and
            community impact efforts.
          </p>
        </div>

        <div className='award-box award-box-light' data-aos="zoom-in">
          <h3 className='award-title'>
            Best Local New Member - Junior Chamber International, Hama
          </h3>
          <p className='award-description'>
            Awarded for exemplary participation and rapid contribution as a new
            member, showcasing commitment, leadership potential, and community
            engagement.
          </p>
        </div>

        <div className='award-box award-box-light' data-aos="zoom-in">
          <h3 className='award-title'>
            Most Effective Youth in Community Support - UNDP Youth on Board
            Initiative
          </h3>
          <p className='award-description' data-aos="zoom-in">
            Honored by the United Nations Development Programme for impactful
            contributions to youth empowerment and grassroots community
            development.
          </p>
        </div>

        <div className='award-box award-box-light' data-aos="zoom-in">
          <h3 className='award-title'>
            Best Business Plan - Saudi Arabia (KSA)
          </h3>
          <p className='award-description'>
            Won top recognition for a business plan that demonstrated
            innovation, market viability, and strong execution strategy in a
            competitive entrepreneurship program.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Awards
