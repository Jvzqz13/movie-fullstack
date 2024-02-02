import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import MoviesList from './components/MoviesList';
import MainPage from './components/pages/MainPage';
import NavBar from './components/NavBar';
import MovieDetails from './components/MovieDetails';

//Context
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {

  const [movies , setMovies] = useState([]);
  const [ theme, setTheme ] = useState('light')
  const [ user, setUser ] = useState(null)

  // Connects to the backend //
  //useEffect
  useEffect(() => {
    // connect to the backend
    const fetchData = async () => {

      const res = await fetch ('https://movies-full-stack-backend-cdyg.onrender.com/api/movies');
      const data = await res.json();
      console.log(data);

      //set the data to the state movies variable
      setMovies(data)
    } 
    fetchData();
  }, []);


  return (

    <UserContext.Provider value={{user, setUser}} >

    <ThemeContext.Provider value={{theme, setTheme}}>
    <div>
      {
        user ? (
          <>
          <NavBar />
          
    <Routes>
      <Route path='/' element={ <MainPage /> } />
      <Route path="/movies" element={ <MoviesList movies={movies}/> } />
      <Route path='/movies/:id' element={ <MovieDetails />} />
    </Routes>
          </>
        ) : (
          <MainPage />
        )
      }
    </div>
    <div className="App">
    <h1> Movies FullStack Appp </h1>


    </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
