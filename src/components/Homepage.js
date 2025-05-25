import React from 'react';
import '../App.css'; 
import Background from './Background';
import ProfileSection from './ProfileSection';
import MainNameHeader from './MainNameHeader'

function Homepage() {
  return (
    <div className="homepage">
        <Background>
          <ProfileSection/>
        </Background>

    </div>
  );
}

export default Homepage;
