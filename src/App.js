import './App.css';
import ListeFilm from './composant/ListeFilm';
import FiltreFilm from './composant/FiltreFilm';

function App() {
  
  return (
    <div className="App">
      <FiltreFilm />
      <ListeFilm/>
    </div>
  );
}

export default App;
