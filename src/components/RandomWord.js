let words = [

    "pencil",
    "apple",
    "hangman",
    "airplane",
    "linux",
    "monitor",
    "language",
    "developer",
    "photograph",
    "house",
    "extraordinary",
    "example",
    "river",
    "google",
    "react",
    "javascript",
    "contribution",
    "component",
    "source",
    "application",
    "training",
    "consistency",
    "different",
    "reason",
    "install",
    "fighter",
    "keyboard"

];

const randomWord = () =>{
    return words[
        Math.trunc(Math.random() * words.length)
    ];
};

export {randomWord};