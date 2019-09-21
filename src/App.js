import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard'
const word = ['Hello', 'React','Engineer','Computer'];
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component {

  newgame = () => {
    window.location.reload(false);
  }
  
  render() {
  return (
    <div className = 'App'>
      <h2 id="label">Welcome to random word game</h2>
      <WordCard value={item.toUpperCase()}/>
      <h2 id="result"></h2>
      <h2 id="tryagain"></h2>
      <button id="newgame" class="button" onClick={this.newgame}>NewGame</button>


 </div>
 );
  }
 }

export default App;
