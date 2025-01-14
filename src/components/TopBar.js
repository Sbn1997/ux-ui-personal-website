import React from 'react';
import logo from '../background-images/LOGO2.png';



function TopBar () {
    return (
        <div className='top-bar'>
            <img
            className="logo"
            alt="Logo"
            src= {logo}
            />

            <div className='bar-options-wrapper'>
                <div className='bar-option'>
                    <a href='/'>Home</a>
                </div>
                <div className='bar-option'>Projects</div>
                <div className='bar-option'>About Me</div>
            </div>
            <div className='btn-wrapper'>
               <button className='contact-btn'>Contact me</button>
            </div>


        </div>
    )

}

export default TopBar;