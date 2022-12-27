import React from 'react'
import Image from 'next/image'

import team1 from '../../utils/image/team1.png'
import team2 from '../../utils/image/team2.png'
import team3 from '../../utils/image/team3.png'

const css = require('./team.module.css')

const Team = () => {
  return (
    <div className={ css.teamBackGround }>
      <div className={ css.teamCard }>
        <div className={ css.team }>
          <div className={ css.teamTitle }>OUR TEAM</div>
          <div className={ css.teamSubTitle }>a collection of 5,000 unique NFTs</div>
          <div className={ css.teamContainer }>
            <div className={ css.teamItem }>
              <div className={ css.teamItemImage }>
                <Image src={team1} alt='' style={{ width: '100%' }} />
              </div>
              <div className={ css.teamItemTitle }>@Ileana_d</div>
              <div className={ css.teamItemName }>Ileana Dierdrich</div>
              <div className={ css.teamItemPositionn }>Artist</div>
            </div>
            <div className={ css.teamItem }>
              <div className={ css.teamItemImage }>
                <Image src={team2} alt='' style={{ width: '100%' }} />
              </div>
              <div className={ css.teamItemTitle }>@el_lobo_loco</div>
              <div className={ css.teamItemName }>Jerod Pequot</div>
              <div className={ css.teamItemPositionn }>Dev</div>
            </div>
            <div className={ css.teamItem }>
              <div className={ css.teamItemImage }>
                <Image src={team3} alt='' style={{ width: '100%' }} />
              </div>
              <div className={ css.teamItemTitle }>@amoebaaaa</div>
              <div className={ css.teamItemName }>Alfred Kensington</div>
              <div className={ css.teamItemPositionn }>Community</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
