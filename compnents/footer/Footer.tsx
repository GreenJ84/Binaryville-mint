import React from 'react'
import Image from 'next/image'

import DiscordSVG from '../../utils/icons/Discord.svg'
import TwitterSVG from '../../utils/icons/Twitter.svg'
import InstagramVG from '../../utils/icons/Instagram.svg'
import OpenSeaSVG from '../../utils/icons/OpenSea.svg'

const css = require('./footer.module.css')

const Footer = () => {
  const handleDiscord = () => {
    window.open('')
  }

  const handleTwitter = () => {
    window.open('')
  }

  const handleInstagram = () => {
    window.open('')
  }
  return (
    <div className={css.footerBC}>
      <div className={css.footerMain}>
          <div className={ css.footerIcon }>
            <Image src={OpenSeaSVG} alt="" className={ css.footerIcon }/>
          </div>
          <div className={css.footerIconText}>
            Open sea
          </div>
          <div className={css.footerName}>
            Binaryville
        </div>

          <div className={css.footerJoin}>
            Join us
          </div>
          <div className={ css.footerContainer }>
            <div className={ css.footerLink } onClick={handleDiscord}>
              <Image src={DiscordSVG} alt="" className={ css.footerIcon }/>
              <div className={css.footerLinkText}>
                Discord
              </div>
            </div>
          
            <div className={ css.footerLink } onClick={handleTwitter}>
              <Image src={TwitterSVG} alt="" className={ css.footerIcon }/>
              <div className={css.footerLinkText}>
                Twitter
              </div>
            </div>
          
            <div className={ css.footerLink } onClick={handleInstagram}>
              <Image src={InstagramVG} alt="" className={ css.footerIcon }/>
              <div className={css.footerLinkText}>
                Instagram
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
