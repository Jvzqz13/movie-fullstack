import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import MoviesList from './components/MoviesList';
import MainPage from './components/pages/MainPage';
import NavBar from './components/NavBar';
import MovieDetails from './components/MovieDetails';

//Context
import { ThemeContext } from './context/ThemeContext';

function App() {

  const [movies , setMovies] = useState([]);
  const [ theme, setTheme ] = useState('light')

  // Connects to the backend //
  //useEffect
  useEffect(() => {
    // connect to the backend
    const fetchData = async () => {

      const res = await fetch ('http://localhost:4000/api/movies');
      const data = await res.json();
      console.log(data);

      //set the data to the state movies variable
      setMovies(data)
    } 
    fetchData();
  }, []);


  return (

    <ThemeContext.Provider value={{theme, setTheme}}>

    <div className="App">
    <h1> Movies FullStack Appp </h1>
    <NavBar />

    <Routes>
      <Route path='/' element={ <MainPage /> } />
      <Route path="/movies" element={ <MoviesList movies={movies}/> } />
      <Route path='/movies/:id' element={ <MovieDetails />} />
    </Routes>

    </div>
    </ThemeContext.Provider>
  );
}

export default App;
