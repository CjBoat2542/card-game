import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = ['dust', 'best','army','bank','black','chin' , 'evil','fact','fine','host','joke','main'];
var item = word[Math.floor(Math.random()*word.length)];
//var requstAns

class App extends Component{
  constructor(){
    super();
    this.state ={requstAns : false }
  }


  newgame = () => {
    window.location.reload(false);
  }

  requstAns = () => {
    this.setState({
      requstAns : true
    })
  }

  getAnswer = (answer) => {
    document.getElementById('solve').innerHTML = `${answer}`
  }



  render() {
    return (
      <div className="App">
        <h1 id="label">Welcome to random word game</h1>
        {  
          <WordCard value={item.toUpperCase()} requstAns={this.state.requstAns} getAnswer ={this.getAnswer}/>     
        }
        
        
        <h2 id="input"></h2>
        <h2 id="result"></h2>
        <h2 id="Ans"></h2>
        <h2 id="hint"></h2>
        <h2 id="solve"></h2>
        <button id="newgame" class="button" onClick={this.newgame}>NewGame</button>
        <button id="surrender" class="button" onClick={this.requstAns}>Surrender</button>
      </div>
    );
  }
}

export default App;