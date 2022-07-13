import React, {Component} from "react";
import {randomWord} from "./RandomWord";
import "./Hangman.css";
import imageZero from "../images/image-zero.png";
import imageOne from "../images/image-one.png";
import imageTwo from "../images/image-two.png";
import imageThree from "../images/image-three.png";
import imageFour from "../images/image-four.png";
import imageFive from "../images/image-five.png";
import imageSix from "../images/image-six.png";

class Hangman extends Component
{
    static defaultProps = {
        maxWrong: 6,
        images: [imageZero, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix]
    };

    constructor(props){
        super(props);
        this.state = {
            numberOfWrong: 0,
            guessed: new Set(),
            answer: randomWord()
        };

        this.handleGuess = this.handleGuess.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset(){
        this.setState({
            numberOfWrong: 0,
            guessed: new Set(),
            answer: randomWord()
        })
    }

    guessedWord(){
        return this.state.answer.split("").map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
    }

    handleGuess(e){
        let letter = e.target.value;
        this.setState((s) =>({
            guessed: s.guessed.add(letter),
            numberOfWrong: s.numberOfWrong + (s.answer.includes(letter) ? 0 : 1),
        }));
    }

    generateKeypad(){
        return "qwertyuiopasdfghjklzxcvbnm".split("").map((letter) => (
            <button 
                key={letter}
                value={letter}
                onClick={this.handleGuess} 
                disabled={this.state.guessed.has(letter)} 
                className="letter-button"
            >

                {letter}

            </button>
        ))
    }

    render(){
        const gameOver = this.state.numberOfWrong >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        let gameState = this.generateKeypad();

        if(isWinner)
            gameState = <span className="message">You Win!</span>;
        
        if(gameOver)
            gameState = <span className="message">You Lose!</span>;

        let restart = gameOver || isWinner;

        return(
            <div className="hangman">

                <div className="image-overlay">

                    <img src={this.props.images[this.state.numberOfWrong]} alt="" className="hangman-images" />

                    <p className="guesses-left">
                        Guesses Left: {this.props.maxWrong - this.state.numberOfWrong} / {this.props.maxWrong}
                    </p>

                </div>


                <p className="guess">Guess the word!</p>

                <p className="guess-word">
                    {!gameOver ? this.guessedWord() : this.state.answer}
                </p>

                <p className="display-buttons">
                    {gameState}
                </p>

                {restart &&
                    <button onClick={this.reset} className="button-play-again">Play Again</button>
                }

            </div>
        );
    }

}

export default Hangman;