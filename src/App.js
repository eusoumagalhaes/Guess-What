//Styles
import './App.css';

//Data
import { wordsList } from './Data/words';

//Components
import Home from './Components/Home/home';
import Game from './Components/Game/game';
import GameOver from './Components/Game/gameOver';

//Hooks
import {useCallback, useEffect, useState} from 'react';

const stages = [
  {id:1, name: "start"},
  {id:2, name: "guess"},
  {id:3, name: "end"}
];

function App() {
  const [currentStage, setCurrentStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [pickedCategory, setPickedCategory] = useState(""); 
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //picking a category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //picking a word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category};
  }

  //Game Stages

  const startGame = () => {
    //picking a word and category
    const {word, category} = pickWordAndCategory();
    //creating an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //setting the state
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setCurrentStage(stages[1].name);
  }

  const verifyLetter = () => {
    setCurrentStage(stages[2].name);
  }

  const retry = () => {
    setCurrentStage(stages[0].name);
  }

  return (
    <div className="App">
      {currentStage==='start' && <Home startGame={startGame}/>}
      {currentStage==='guess' && <Game verifyLetter={verifyLetter}/>}
      {currentStage==='end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
