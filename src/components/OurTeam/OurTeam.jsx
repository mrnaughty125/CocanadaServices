import React from 'react'
import CEODummyImage from '../../assets/aboutUS/CEO-dummy.jpg';
import OurTeamCss from './our-team.module.scss';

function OurTeam() {
  return (
    <div className={OurTeamCss['our-team-container']}>
      <h1>Our Team</h1>
      <div className={OurTeamCss['images-wrapper']}>
        <div className={OurTeamCss['image']}>
            <img src={CEODummyImage} alt="CEO"/>
            <h3>Vijay</h3>
            <p>CEO</p>
        </div>
        <div className={OurTeamCss['image']}>
            <img src={CEODummyImage} alt="CEO"/>
            <h3>Singh</h3>
            <p>CFO</p>
        </div>
        <div className={OurTeamCss['image']}>
            <img src={CEODummyImage} alt="CEO"/>
            <h3>Pradeep</h3>
            <p>CFO</p>
        </div>
        <div className={OurTeamCss['image']}>
            <img src={CEODummyImage} alt="CEO"/>
            <h3>Ajay</h3>
            <p>COO</p>
        </div>
        
      </div>
    </div>
  )
}

export default OurTeam