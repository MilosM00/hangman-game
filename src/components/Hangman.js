import React from "react";
import "./Hangman.css";

const Hangman = () =>{
    return(

        <div className="overlay-hangman">

            <div className="head"></div>
            <div className="body"></div>
            <div className="arm-one"></div>
            <div className="arm-two"></div>
            <div className="leg-one"></div>
            <div className="leg-two"></div>
            <div className="layer-one"></div>
            <div className="layer-two"></div>
            <div className="layer-three"></div>
            <div className="layer-four"></div>
            
        </div>

    );
};

export default Hangman;