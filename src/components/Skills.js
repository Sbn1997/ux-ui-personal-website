import React from "react";
import IconBox from "./IconBox";
import figmaLogo from "../Logos/figma.png"
import afterLogo from "../Logos/after-effects.png"
import illustratorLogo from "../Logos/illustrator.png"
import photoshopLogo from "../Logos/photoshop.png"
import resolumeLogo from "../Logos/resolume-arena.png"
import premierLogo from "../Logos/premier.png"




function Skills (){
    return(
        <div className="skills-wrapper">
        <div className="skillsBox">
            <div className="hSkills">
                Skills
            </div>
            <div className="skillsIconWrapper">

                <div>
                    <IconBox src={figmaLogo} alt={'Figma'}></IconBox>
                </div>
                <div>
                    <IconBox src={photoshopLogo} alt={'Photoshop'}></IconBox>
                </div>
                <div>
                    <IconBox src={premierLogo} alt={'premier'}></IconBox>
                </div>
                <div>
                    <IconBox src={afterLogo} alt={'after-effects'}></IconBox>
                </div>
                <div>
                    <IconBox src={illustratorLogo} alt={'illustrator'}></IconBox>
                </div>
                                <div>
                    <IconBox src={resolumeLogo} alt={'resolume-arena'}></IconBox>
                </div>

            </div>
        </div>

        </div>
    )
}

export default Skills;