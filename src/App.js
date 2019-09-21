import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard'
const word = ['Hello', 'React','Engineer','Computer'];
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component {

  //console.log(`${this.item} Bravo!!!`)
  render() {
  return (
    <div className = 'App'>
      <h2 id="label">Welcome to random word game</h2>
      <WordCard value={item.toUpperCase()}/>
      <h2 id="result"></h2>
 </div>
 );
  }
 }

export default App;
