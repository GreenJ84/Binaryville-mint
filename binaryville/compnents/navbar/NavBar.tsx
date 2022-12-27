import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import  Logo from '../../utils/icons/Logo.svg'
import header1 from '../../utils/image/header1.png'
import header2 from '../../utils/image/header2.png'

const css = require('./navbar.module.css')

const Navbar = () => {

  return (
    <div className={ css.navbar}>
      <div className={ css.navbarContainer }>
        <div className={ css.navbarTop }>
          <div className={ css.navbarCenterTop }>
            <Image src={Logo} alt='' className={css.logo } />
          </div>
          <div className={ css.navbarCenterBottom }>
            <Link className={ css.navbarCenterItem} href='#mint'>
              Mint
            </Link>
            <Link className={ css.navbarCenterItem} href='#about'>
              About Binaryville
            </Link>
            <Link className={ css.navbarCenterItem} href='#roadmap'>
              Roadmap
            </Link>
            <Link className={ css.navbarCenterItem} href='#team'>
              Team
            </Link>
            <Link className={ css.navbarCenterItem} href='#faq'>
              FAQ
            </Link>
          </div>
        </div>
      </div>

      <div className={ css.navbarContainer }>
        <div className={ css.navbarLeft}>
          <Image src={header1} alt='' className={ css.navbarBoxImage } />
        </div>
        <div className={ css.navbarCenter }>
          <div className={ css.navbarBox }>
            <div className={ css.navbarBoxTitle }>
              <span className={ css.textHighlight }>Welcome</span> to Binaryville
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
