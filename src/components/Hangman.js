import React from "react";
import "./Hangman.css";

const Hangman = () =>{

    const [head, setHead] = React.useState(false);
    const [body, setBody] = React.useState(false);
    const [armOne, setArmOne] = React.useState(false);
    const [armTwo, setArmTwo] = React.useState(false);
    const [legOne, setLegOne] = React.useState(false);
    const [legTwo, setLegTwo] = React.useState(false);

    return(

        <div className="overlay-hangman">

            <div className={head === true ? "head" : "transparent-head"}></div>
            <div className={body === true ? "body" : "transparent-body"}></div>
            <div className={armOne === true ? "arm-one" : "transparent-arm-one"}></div>
            <div className={armTwo === true ? "arm-two" : "transparent-arm-two"}></div>
            <div className={legOne === true ? "leg-one" : "transparent-leg-two"}></div>
            <div className={legTwo === true ? "leg-two" : "transparent-leg-two"}></div>
            <div className="layer-one"></div>
            <div className="layer-two"></div>
            <div className="layer-three"></div>
            <div className="layer-four"></div>
            
        </div>

    );
};

export default Hangman;