import React from 'react'

import about1 from '../../utils/image/about1.png'
import about2 from '../../utils/image/about2.png'
import about4 from '../../utils/image/about4.png'

import About3 from '../../utils/icons/About3.svg'

const css = require('./about.module.css')
import Image from 'next/image'

const About = () => {

  return (
    <div className={css.componentFirst}>
      <div className={ css.componentSecond }>
        <div className={css.about}>
          <div className={css.aboutLeft}>
            <div className={ css.aboutBox }>
              <Image src={about1} alt='' className={ css.aboutBoxIMG } />
            </div>
          </div>
          <div className={ css.aboutRight }>
            <div className={ css.aboutRightTop }>
              <div className={ css.aboutBox }>
                <Image src={about2} alt='' className={ css.aboutBoxIMG } />
              </div>
            </div>
            <div className={ css.aboutRightBottom }>
              <div className={ css.aboutRightBottomLeft}>
                <div className={ css.aboutBox }>
                  <Image alt={''} src={About3} className={ css.aboutBoxIMG } />
                </div>
              </div>
              <div className={ css.aboutRightBottomRight }>
                <div className={css.aboutBox && css.aboutBoxLast }>
                  <Image src={about4} alt='' className={ css.aboutBoxIMG } />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={ css.aboutTextContainer }>
          <div className={ css.aboutText}>
            On the edge of the world stands the progressive town of Binaryville, where technology is a way of life.
          </div>
          <div className={ css.aboutText}>
            The robots who live, work, and play in Binaryville learn from an early age that magic is made simply by
            combining 0's and 1's.
          </div>
          <div className={ css.aboutText}>
            For the Binaryville robots, every waking thought and every sleeping dream is consumed with unique
            permutations… and endless possibilities. This is our happy place, and we invite the dreamers, thinkers,
            and inventors of the world to unite in our passion for building something out of nothing.
          </div>
          <div className={ css.aboutText}>
            (Well, nothing plus 1.) Visit Binaryville and let your imagination soar! This is our first collection
            of Binaryville Robot NFTs is uniquely handdrawn and gives you access to our community. Mint today and
            join us!
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
