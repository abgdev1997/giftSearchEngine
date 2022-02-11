import React from 'react';
import './App.css';
import { ListOfGifs } from './components/ListOfGifs';
import { Route, Link } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/panda'>Pandas</Link>
        <Link to='/gif/star-wars'>Star Wars</Link>
        <Link to='/gif/dragon-ball'>Dragon Ball</Link>
        <Route path='/gif/:keyword' component={ListOfGifs}/>
      </section>
    </div>
  );
}

export default App;
