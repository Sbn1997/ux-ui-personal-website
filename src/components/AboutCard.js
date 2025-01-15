import React from "react";



function AboutCard (){
    return(
        <div className="about-wrapper">
            <div className="about">
                <div className="name-wrapper">
                    <h1 className="name">OR NADAV</h1>
                </div>
                <div className="title-wrapper">
                    <p className="title">UX/UI Designer</p>
                </div>
                <p className="about-description">Hi, I'm Or Nadav, a dedicated UX/UI<br/> designer passionate about creating intuitive<br/>  and visually appealing digital experiences.</p>
                <div className="btn-about-wrapper">
                    <button className="btn-about">ABOUT ME</button>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;