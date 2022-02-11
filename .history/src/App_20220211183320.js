import React from 'react';
import './App.css';
import { ListOfGifs } from './components/ListOfGifs';
import { Route } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <a href='/gif/panda'>Pandas</a>
        <a href='/gif/star-wars'>Star Wars</a>
        <a href='/gif/dragon-ball'>Dragon Ball</a>
        <Route path='/gif/:keyword' component={ListOfGifs}/>
      </section>
    </div>
  );
}

export default App;
