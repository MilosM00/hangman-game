import React from "react";
import "./Find.css";

const Find = (props) =>{
    return(

        <div className="overlay-find">

            <div className="inline-word">

                {
                    props.randomWord.split("").map((value, id) =>{
                        return(
                            <span key={id} className="display-word">{value}</span>
                        );
                    })
                }

            </div>

        </div>

    );
};

export default Find;