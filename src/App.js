import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = ['้dust', 'best','army','bank','black','chin' , 'evil','fact','fine','host','joke','main'];
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
        <h2 id="hint"></h2>
        <button id="newgame" class="button" onClick={this.newgame}>NewGame</button>
      </div>
    );
  }
}

export default App;