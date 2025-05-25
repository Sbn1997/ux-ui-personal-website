import React from 'react';
import TopBar from './TopBar';
import AboutCard from './AboutCard';
import MainNameHeader from './MainNameHeader'
import Skills from './Skills';
import heroVideo from '../videos/hero.m4v'


function ProfileSection() {
  return (
    <div className='profile-wrapper'>
      <div className="profile-section">
          <TopBar></TopBar>
          <MainNameHeader/>
          <div className='heroVideoWrapper'>
             <video
               src={heroVideo}
               autoPlay
               playsInline   // suppresses iOS full-screen takeover
               muted
               loop
               preload="auto"
               className="heroVideo"
               aria-label="Decorative background video"
            />

          </div>
        <div className='about-card-wrapper'>
          <AboutCard></AboutCard>
        </div>
        <div className='skills'>
            <Skills></Skills>
        </div>
        </div>

        
        
      </div>
  );
}

export default ProfileSection;