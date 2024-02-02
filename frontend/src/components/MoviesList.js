//this component makes the list for the items

import MovieItem from "./MovieItem";
import Spinner from 'react-bootstrap/Spinner';

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function MoviesList({movies}) {
    const themeCtx = useContext(ThemeContext);
    const { theme } = themeCtx;

    return (

        // <div style={{backgroundColor: theme === 'light' ? '#fff': '#000' }} >
            <div className={theme === 'light' ? 'lightMode' : 'darkMode'} >

            <h1>
                Movies List
            </h1>

            <div>
                {movies.length > 1 ? 
                movies.map((movie) => <MovieItem movie={movie} key={movie._id}/>)
                : <Spinner animation="border" role="status">
                <span className="visually"> Loading... </span>
              </Spinner>
            
        }
            </div>
        </div>

    )
}

export default MoviesList;

