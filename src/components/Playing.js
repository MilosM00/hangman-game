import React from "react";
import "./Playing.css";

const Playing = (props) =>{
    return(

        <>
            {props.playing === false &&
                <div className="playing-overlay">
                    <div className="info-playing">
                        <p className="win-lose">You Win The Game!</p>
                        <button className="button-play-again" onClick={props.playAgain}>Play Again</button>
                    </div>
                </div>
            }
        </>

    );
};

export default Playing;