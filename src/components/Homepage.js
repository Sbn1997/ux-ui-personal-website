import React from 'react';
import '../App.css'; 
import Background from './Background';
import ProfileSection from './ProfileSection';

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
