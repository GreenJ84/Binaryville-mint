import Image from 'next/image'
import React from 'react'

import  Logo from '../../utils/icons/Logo.svg'
import header1 from '../../utils/image/header1.png'
import header2 from '../../utils/image/header2.png'

const css = require('./navbar.module.css')

const Navbar = () => {
  const handleMint = () => { }
  
  const handleAbout = () => {
    var scroll = document.getElementsByClassName('aboutBC') as HTMLCollectionOf<HTMLElement>;
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop })
  }
  const handleRoadmap = () => {
    var scroll = document.getElementsByClassName('roadmapBC') as HTMLCollectionOf<HTMLElement>;
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop - 20 })
  }
  const handleTeam = () => {
    var scroll = document.getElementsByClassName('teamBackGround') as HTMLCollectionOf<HTMLElement>;
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop - 20 })
  }
  const handleFaq = () => {
    var scroll = document.getElementsByClassName('faqScroll') as HTMLCollectionOf<HTMLElement>;
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop + 20 })
  }

  return (
    <div className={ css.navbar}>
      <div className={ css.navbarContainer }>
        <div className={ css.navbarLeft}></div>
        <div className={ css.navbarCenter }>
          <div className={ css.navbarCenterTop }>
            <Image src={Logo} alt='' className={css.logo } />
          </div>
          <div className={ css.navbarCenterBottom }>
            <div className={ css.navbarCenterItem} onClick={handleMint}>
              Mint
            </div>
            <div className={ css.navbarCenterItem} onClick={handleAbout}>
              About CL
            </div>
            <div className={ css.navbarCenterItem} onClick={handleRoadmap}>
              Roadmap
            </div>
            <div className={ css.navbarCenterItem} onClick={handleTeam}>
              Team
            </div>
            <div className={ css.navbarCenterItem} onClick={handleFaq}>
              FAQ
            </div>
          </div>
        </div>
        <div className={ css.navbarRight }></div>
      </div>

      <div className={ css.navbarContainer }>
        <div className={ css.navbarLeft}>
          <Image src={header1} alt='' className={ css.navbarBoxImage } />
        </div>
        <div className={ css.navbarCenter }>
          <div className={ css.navbarBox }>
            <div className={ css.navbarBoxTitle }>
              <span className={ css.textHighlight }>Welcome</span> to Cyber Lithograph
            </div>
            <div className={ css.navbarBoxSubTitle }>a collection of 5,000 unique NFTs</div>
            <div className={ css.navbarBoxButton }>MINT NOW</div>
          </div>
        </div>
        <div className={ css.navbarRight }>
          <Image src={header2} alt='' className={ css.navbarBoxImage } />
        </div>
      </div>
    </div>
  )
}

export default Navbar
