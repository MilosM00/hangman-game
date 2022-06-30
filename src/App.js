import React from "react";
import Hangman from "./components/Hangman";
import Playing from "./components/Playing";

const App = () =>{

    const [head, setHead] = React.useState(false);
    const [body, setBody] = React.useState(false);
    const [armOne, setArmOne] = React.useState(false);
    const [armTwo, setArmTwo] = React.useState(false);
    const [legOne, setLegOne] = React.useState(false);
    const [legTwo, setLegTwo] = React.useState(false);

    const [playing, setPlaying] = React.useState(false);

    const playAgain = () =>{
        setPlaying(true);
    };

    return(

        <div>
            
            <Hangman 
                head={head}
                body={body}
                armOne={armOne}
                armTwo={armTwo}
                legOne={legOne}
                legTwo={legTwo}
            />

            <Playing 
                playing={playing}
                playAgain={playAgain}
            />

        </div>

    );
};

export default App;