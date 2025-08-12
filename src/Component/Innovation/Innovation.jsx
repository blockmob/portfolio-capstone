import React from 'react'
import './Innovation.css'
const Innovation = () => {
  return (
    <div className='innovation-section' id='Ventures'>
      <div className='homeimagediv'>
        <img
          src='/Images/midsection/image_1_1_4x.webp'
          className='homeimage'
          alt=''
        />
      </div>
      <div>
        {/* <div className='innovation-header'>
          <div className='innovation-header-left'>
            <span className='innovation-section-number'>04/</span>
            <br />
            <span className='innovation-section-title'>VENTURES</span>
            <p className='innovation-main-title'>
              INNOVATION
              <br />
              THROUGH EXPERIENCE
            </p>
          </div>
          <div className='innovation-header-right'>
            <p className='innovation-header-description'>
              I build and lead ventures that drive digital transformation—from
              Capstone Blockchain and the GAYA ecosystem to Gaya Wallet—creating
              scalable, real-world blockchain solutions for users, businesses,
              and governments.
            </p>
          </div>
        </div> */}
        <div className='innovation-content'>
          <div className='innovation-left-column'>
            <div className='innovation-header-left'>
              <span className='innovation-section-number'>04/</span>
              <br />
              <span className='innovation-section-title'>VENTURES</span>
              <p className='innovation-main-title'>
                INNOVATION
                <br />
                THROUGH EXPERIENCE
              </p>
            </div>
            <div className='innovation-header-right beforeleft'>
              <p className='innovation-header-description'>
                I build and lead ventures that drive digital transformation—from
                Capstone Blockchain and the GAYA ecosystem to Gaya
                Wallet—creating scalable, real-world blockchain solutions for
                users, businesses, and governments.
              </p>
            </div>
            <div className='venture-block capstone-block'>
              <img
                src='/Images/midsection/capstonelogo.svg'
                alt='Capstone Logo'
                className='logoosss'
              />
              <div>
                <h2>Capstone Blockchain DMCC</h2>
                <p className='venture-description'>
                  A transformation engine at the intersection of strategy,
                  innovation, and execution. We partner with businesses and
                  governments to build secure, scalable blockchain
                  solutions—from DeFi and tokenized assets to digital identity
                  and smart infrastructure.
                </p>
                <p className='venture-quote'>
                  “The future isn’t something to predict — it’s something to
                  build.”
                </p>
              </div>
            </div>
            <div className='venture-block gaya-wallet-block'>
              <img src='/Images/midsection/gw.svg' alt='Capstone Logo' className='logoosss1' />
              <div>
                <h2>Gaya Wallet</h2>
                <p className='venture-description'>
                  A DMCC-licensed, multi-chain crypto wallet that simplifies
                  user experience without compromising on control.
                </p>
                <ul className='venture-features'>
                  <li>Self-custodial & audited</li>
                  <li>Supports Multichain</li>
                  <li>
                    Features like DCA, staking, portfolio tracking, and airdrops
                  </li>
                </ul>
              </div>
            </div>
            <div className='venture-block dr3-block'>
              <img src='/Images/midsection/dr3.svg' alt='Capstone Logo' className='logoosss1' />
              <div>
                <h2>DR3</h2>
                <p className='venture-description'>
                  At DR3 Lab, we specialize in cybersecurity certifications and
                  embedded consulting. Our mission is simple yet vital: build
                  digital trust through visible verification, real-time support,
                  and industry-wide accountability.
                  <br />
                  <br />
                  We work with companies of all sizes to secure websites, apps,
                  and backend infrastructures—creating smarter, safer digital
                  environments.
                </p>
              </div>
            </div>
          </div>
          <div className='innovation-right-column'>
            <div className='gshgdsghadks'>
              <div className='innovation-header-right'>
                <p className='innovation-header-description'>
                  I build and lead ventures that drive digital
                  transformation—from Capstone Blockchain and the GAYA ecosystem
                  to Gaya Wallet—creating scalable, real-world blockchain
                  solutions for users, businesses, and governments.
                </p>
              </div>
              <div className='venture-block gaya-blockchain-block'>
                <img src='/Images/midsection/gb.svg' alt='Capstone Logo' className='logoosss' />
                <div>
                  <h2>Gaya Blockchain</h2>
                  <p className='venture-description'>
                    A Layer 1 blockchain built in the UAE integrating gaming,
                    DeFi, tokenized assets, and decentralized identity into one
                    seamless platform. GAYA is designed to empower communities
                    and individuals to own their data and value.
                  </p>
                </div>
              </div>
              <div className='venture-block city-crafters-block'>
                <img src='/Images/midsection/cc.svg' alt='Capstone Logo' className='logoosss' />
                <div>
                  <h2>City Crafters</h2>
                  <p className='venture-description'>
                    City Crafters creates immersive mobile gaming experiences
                    that combine storytelling, creativity, and cutting-edge
                    tech. Our mission is to inspire and connect a global
                    community through polished, accessible games that spark
                    imagination and foster shared adventures. We’re shaping the
                    future of interactive entertainment—one story at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Innovation
