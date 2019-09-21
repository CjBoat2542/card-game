import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = ['Hello', 'React','Engineer','Computer','Black','Cat' , 'Eat'];
var item = word[Math.floor(Math.random()*word.length)];


class App extends Component{
  

  newgame = () => {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="App">
        <h1 id="label">Welcome to random word game</h1>
        {  
          <WordCard value={item.toUpperCase()}/>     
        }
        
        
        <h2 id="input"></h2>
        <h2 id="result"></h2>
        <h2 id="Ans"></h2>
        <h2 id="hint1"></h2>
        <button id="newgame" class="button" onClick={this.newgame}>NewGame</button>
      </div>
    );
  }
}

export default App;