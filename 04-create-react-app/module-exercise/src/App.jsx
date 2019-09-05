import React from 'react';
import fruitsArray from './foods.jsx';
import {choice, removeFruit} from './choice.jsx';

function App() {
  var choosenFood = choice(fruitsArray);

  console.log(fruitsArray);
  console.log(choosenFood);

      console.log("I would like "+ choosenFood + ", please");
      console.log("Here you go " + choosenFood);
      console.log("Delicious! May I have another?");
      var remaining = removeFruit(fruitsArray, choosenFood);
      console.log("I'm sorry, we're all out, we have " + remaining + " left.");
  return (
    <div className="App">
    </div>
  );
}

export default App;
