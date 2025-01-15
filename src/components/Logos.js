import React from "react";
import figma from '../Logos/figma.png';


function Logos (){
    return(
    <div className="logos-wrapper ">
        <div className="logos-col1">
            <img className="figma p-logo" src={figma}></img>
            <img className="illustrator p-logo" src= {figma}></img>
            <img className="premiere-pro p-logo" src={figma}></img>
        </div>
        <div className="logos-col2">
            <img className="after-effects p-logo" src={figma}></img>
            <img className="photoshop p-logo" src={figma}></img>
            <img className="resolume-arena p-logo" src={figma}></img>
        </div>
    </div>

    )
}

export default Logos;