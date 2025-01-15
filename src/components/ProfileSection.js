import React from 'react';
import TopBar from './TopBar';
import AboutCard from './AboutCard';
import Logos from './Logos';


function ProfileSection() {
  return (
    <div className='profile-wrapper'>
      <div className="profile-section">
          <TopBar></TopBar>
        <div className='about-card-wrapper'>
          <AboutCard></AboutCard>
          <div className='profile-logos-wrapper'>
            <Logos></Logos>
        </div>
        </div>

        
        
      </div>
    </div>
  );
}

export default ProfileSection;