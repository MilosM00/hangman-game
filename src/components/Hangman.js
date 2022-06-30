import React from "react";
import "./Hangman.css";

const Hangman = (props) =>{
    return(

        <div className="overlay-hangman">

            <div className={props.head === true ? "head" : "transparent-head"}></div>
            <div className={props.body === true ? "body" : "transparent-body"}></div>
            <div className={props.armOne === true ? "arm-one" : "transparent-arm-one"}></div>
            <div className={props.armTwo === true ? "arm-two" : "transparent-arm-two"}></div>
            <div className={props.legOne === true ? "leg-one" : "transparent-leg-two"}></div>
            <div className={props.legTwo === true ? "leg-two" : "transparent-leg-two"}></div>
            <div className="layer-one"></div>
            <div className="layer-two"></div>
            <div className="layer-three"></div>
            <div className="layer-four"></div>
            
        </div>

    );
};

export default Hangman;