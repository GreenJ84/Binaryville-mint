import React, { useState } from 'react'
import Image from 'next/image'

import PlusSVG from '../../utils/icons/Plus.svg'
import MinusSVG from '../../utils/icons/Minus.svg'

const css = require('./faq.module.css')

const FAQ = () => {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)

  return (
    <div id='faq' className={ css.faqScroll }>
      <div className={ css.componentSecond }>
        <div className={css.faq}>

          <div className={ css.faqTitle }>FAQ</div>
          <div className={css.faqSubTitle}>a collection of 5,000 unique NFTs</div>
          
          <div className={css.faqContainer}>
            
            <div className={ css.faqItem } onClick={() => setOne(!one)}>
              <div className={ css.faqItemLeft }>
                <div className={ css.faqItemTitle }>What is Binaryville?</div>
              </div>
              <div className={css.faqItemRight}>{one ? <Image src={MinusSVG} alt='' /> : <Image src={PlusSVG} alt='' />}</div>
            </div>
            {one &&
              <div className={ css.faqItemAnswer }>
                <div className={ css.faqItemAnswerText }>
                  Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance
                  in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance
                  me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park
                  girl they rich hour new well way you. Face ye be me been room we sons fond.
                </div>
              </div>
            }

            <div className={ css.faqItem } onClick={() => setTwo(!two)}>
              <div className={ css.faqItemLeft }>
                <div className={ css.faqItemTitle }>Where do I buy the NFTs?</div>
              </div>
              <div className={ css.faqItemRight }>{two ? <Image src={MinusSVG} alt='' /> : <Image src={PlusSVG} alt='' />}</div>
            </div>
            {two &&
              <div className={ css.faqItemAnswer }>
                <div className={ css.faqItemAnswerText }>
                  Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance
                  in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance
                  me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park
                  girl they rich hour new well way you. Face ye be me been room we sons fond.
                </div>
              </div>
            }

            <div className={ css.faqItem } onClick={() => setThree(!three)}>
              <div className={ css.faqItemLeft }>
                <div className={ css.faqItemTitle }>When will the game be ready?</div>
              </div>
              <div className={ css.faqItemRight }>{three ? <Image src={MinusSVG} alt='' /> : <Image src={PlusSVG} alt='' />}</div>
            </div>
            {three &&
              <div className={ css.faqItemAnswer }>
                <div className={ css.faqItemAnswerText }>
                  Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance
                  in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance
                  me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park
                  girl they rich hour new well way you. Face ye be me been room we sons fond.
                </div>
              </div>
            }

            <div className={ css.faqItem } onClick={() => setFour(!four)}>
              <div className={ css.faqItemLeft }>
                <div className={ css.faqItemTitle }>What do I get?</div>
              </div>
              <div className={ css.faqItemRight }>{four ? <Image src={MinusSVG} alt='' /> : <Image src={PlusSVG} alt='' />}</div>
            </div>
            {four &&
              <div className={ css.faqItemAnswer }>
                <div className={ css.faqItemAnswerText }>
                  Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance
                  in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance
                  me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park
                  girl they rich hour new well way you. Face ye be me been room we sons fond.
                </div>
              </div>
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ