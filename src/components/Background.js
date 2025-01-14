import React from 'react';
import '../App.css'; 

function Background({children}) {
  return (
  <div className='background-wrapper'>
    <div className="background">
        <div className="shape top-shape"></div>
        <div className="shape mid-shape"></div>
        <div className="shape down-shape"></div>
        <div>{children}</div>

    </div>
</div>
  );
}

export default Background;