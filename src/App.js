import { element } from 'prop-types';
import './App.css'
import Header from './components/Header';
import Movies from './components/Movies';
import movies from './movies.json'

function App() {
  return(
    <div>
  <Header />
  <div className="main">
    {
      movies.map((element) =>{
        return(
          < Movies
          title={element.Title} 
          year={element.Year}
          img={element.Poster}/>
        )

      })
    }

  </div>
 
      
    </div>
  )
};

export default App;
