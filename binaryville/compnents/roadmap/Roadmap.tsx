import React from 'react'
import Image from 'next/image'

import Roadmap1SVG from '../../utils/icons/Roadmap1.svg'
import Roadmap2SVG from '../../utils/icons/Roadmap2.svg'
import Roadmap3SVG from '../../utils/icons/Roadmap3.svg'
import Roadmap4SVG from '../../utils/icons/Roadmap4.svg'

const css = require('./roadmap.module.css')

const Roadmap = () => {
  return (
    <div id='roadmap' className={ css.roadmapBC }>
      <div className={ css.componentSecond }>
        <div className={ css.roadmap }>
          <div className={ css.roadmapTitle }>ROADMAP</div>
          <div className={ css.roadmapSubTitle }>a collection of 5,000 unique NFTs</div>

          <div className={ css.roadmapList }>
            <div className={ css.roadmapItemLeft }>
              <div>
                <Image src={Roadmap1SVG} alt="" />
              </div>
              <div className={ css.roadmapText }>One of Binaryville Robot NFT mint collection unit</div>
            </div>

            <div className={ css.roadmapItemRight }>
              <div className={ css.roadmapText }>One of Binaryville Robot NFT mint collection unit</div>
              <div>
                <Image src={Roadmap2SVG} alt="" />
              </div>
            </div>

            <div className={ css.roadmapItemLeft }>
              <div>
                <Image src={Roadmap3SVG} alt="" />
              </div>
              <div className={ css.roadmapText }>One of Binaryville Robot NFT mint collection unit</div>
            </div>

            <div className={ css.roadmapItemRight }>
              <div className={ css.roadmapText }>One of Binaryville Robot NFT mint collection unit</div>
              <div>
                <Image src={Roadmap4SVG} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap