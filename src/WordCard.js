import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
import { thisTypeAnnotation } from '@babel/types';

const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
    return {
            word,
            chars,
            attempt: 1,
            guess: [],
            completed: false
    }
}


export default class WordCard extends
Component {

    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c.toUpperCase()]
        this.setState({guess})
        console.log(guess.join('').toString())
        document.getElementById('input').innerHTML = `${guess.join('').toString()}`
        if(guess.length == this.state.chars.length){
            console.log(`${guess.join('').toString()} ${this.state.chars.join('').toString()}`)
            console.log(`${this.state.chars[1]}`)
            if(guess.join('').toString() == this.state.chars.join('').toString()){
                   this.setState({guess: [], completed: true})
                   document.getElementById('result').innerHTML = `Congratulations! You win` 
            }
            else{
                    
                this.setState({guess: [], attempt: this.state.attempt + 1})
                document.getElementById('result').innerHTML = `Try again : ${this.state.attempt} (You can try again 3 time)  `
                    if(this.state.attempt == 1){
                        document.getElementById('hint').innerHTML = `Hint : ${this.state.chars[0] }(first position)`       
                    }
                    else if(this.state.attempt == 2){
                        document.getElementById('hint').innerHTML = `Hint : ${this.state.chars[1] }(second position)`       
                    }
                    else if(this.state.attempt == 3){
                        document.getElementById('result').innerHTML = `GameOver (wait 3 sec to newgame) `
                        document.getElementById('Ans').innerHTML = `Answer  = ${this.state.chars.join('').toString()}`
                        setTimeout(() =>  window.location.reload(false),2000) 
                       
                    }
                    
            }
        }
    }
render() {
 return (
 <div>
        { Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} {...this.state}/>) }
 </div>
 );
 }
}