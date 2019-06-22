import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const characters = require('./characters/starwars.json');

  return (
    <div>
      <h1>Star Wars characters</h1>

      {
        characters.map((character, index) => {
          return (
              <p>
                {character.name + " is a " + character.type}
              </p>
          )
        })
      }




    </div>
  );
}

export default App;
