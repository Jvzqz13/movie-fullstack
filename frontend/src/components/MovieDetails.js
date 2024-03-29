import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails() {

    //gets id-param from item clicked
    const params = useParams();
    const [movie, setMovie] = useState(null)


    useEffect(()=> {
        console.log(`https://movies-full-stack-backend-cdyg.onrender.com/movies/${params.id}`);

        //function to fetch to fetch the movie by ID 
        const fetchData = async ()=> {
            try {
                const res = await fetch(`https://movies-full-stack-backend-cdyg.onrender.com/api/movies/${params.id}`)
                const data = await res.json();
                console.log(data);

                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

    }, [params.id])



    return (
        <div> 
            { movie && (
                <>
                <h3>Movie Details</h3>
                <h4> {movie.title} </h4>
                </>
            ) }
        </div>
    )
}

export default MovieDetails;