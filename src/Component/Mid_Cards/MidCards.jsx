import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Mid_Cards.css'

const Mid_Cards = () => {
  const cards = useMemo(
    () => [
      {
        title: 'Visionary Leadership',
        description:
          'Driving complex ventures with strategic clarity and long–term focus.',
        Icon: '/Images/midsection/eye.svg'
      },
      {
        title: 'Tokenomics & Ecosystem Design',
        description:
          'Creating utility‑driven token economies that drive growth and engagement.',
        Icon: '/Images/midsection/tok.svg'
      },
      {
        title: 'Blockchain & Web3 Architecture',
        description: 'Building scalable Layer 1 networks and DeFi ecosystems.',
        Icon: '/Images/midsection/block.svg'
      },
      {
        title: 'Digital Transformation',
        description:
          'Aligning emerging tech with real‑world business needs for measurable outcomes.',
        Icon: '/Images/midsection/world.svg'
      },
      {
        title: 'Platform Development',
        description:
          'Launching platforms in fintech, gaming, real estate, and digital identity.',
        Icon: '/Images/midsection/setting.svg'
      }
    ],
    []
  )

  const viewportRef = useRef(null)
  const cardRefs = useRef([])

  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  console.log(atEnd)
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const handleScrollStates = () => {
      const isAtStart = Math.floor(viewport.scrollLeft) <= 0
      const isAtEnd =
        Math.ceil(viewport.scrollLeft + viewport.clientWidth) >=
        Math.floor(viewport.scrollWidth)
      setAtStart(isAtStart)
      setAtEnd(isAtEnd)
    }

    handleScrollStates()
    viewport.addEventListener('scroll', handleScrollStates, { passive: true })

    const resizeObserver = new ResizeObserver(handleScrollStates)
    resizeObserver.observe(viewport)

    return () => {
      viewport.removeEventListener('scroll', handleScrollStates)
      resizeObserver.disconnect()
    }
  }, [])

  const getClosestIndex = () => {
    const viewport = viewportRef.current
    if (!viewport) return 0
    let closestIdx = 0
    let minDelta = Number.POSITIVE_INFINITY
    cardRefs.current.forEach((el, idx) => {
      if (!el) return
      const delta = Math.abs(el.offsetLeft - viewport.scrollLeft)
      if (delta < minDelta) {
        minDelta = delta
        closestIdx = idx
      }
    })
    return closestIdx
  }

  const scrollToIndex = index => {
    const viewport = viewportRef.current
    const el = cardRefs.current[index]
    if (viewport && el) {
      viewport.scrollTo({ left: el.offsetLeft, behavior: 'smooth' })
    }
  }

  const handleNav = direction => {
    const current = getClosestIndex()
    const nextIndex = direction === 'right' ? current + 1 : current - 1
    const clamped = Math.max(0, Math.min(cards.length - 1, nextIndex))
    scrollToIndex(clamped)
  }

  return (
    <section className='mid-cards-section'>
      <div className='fdhdsf'>
        <div className="aboutdiv" data-aos="fade-right" >
          <p className="about-section-number">02/</p>
          <p className="about-section-number">What i do</p>
        </div>
        <p
          className='innovation-header-description hdsdhfhdfhf'
          style={{ fontFamily: 'Geist', color: '#0F0F0F' }}
          data-aos="fade-left" 
        >
          With experience in my field, I can tackle challenges and provide
          solutions. My skills enhance my problem-solving and make me a valuable
          asset to any team.
        </p>
      </div>
      {/* <div className='wrapppp'> */}
      <div className='cards-viewport' ref={viewportRef}>
        {cards.map((row, index) => (
          <div
          data-aos="fade-left" data-aos-delay="500"
            className='mid-card'
            key={row.title}
            ref={el => (cardRefs.current[index] = el)}
          >
            <img src={row.Icon} alt={row.title} className='icon-badge' />
            <p className='card-title'>{row.title}</p>
            <p className='card-description'>{row.description}</p>
          </div>
        ))}
      </div>
      {/* </div> */}

      <div className='nav-controls'>
        <img
          src='/Images/midsection/arrowleft.svg'
          alt='left'
          onClick={() => handleNav('left')}
          disabled={atStart}
          className='srttjy'
        />

        <img
          src='/Images/midsection/arrowright.svg'
          alt='right'
          onClick={() => handleNav('right')}
          className='srttjy'
        />
      </div>
    </section>
  )
}

export default Mid_Cards
