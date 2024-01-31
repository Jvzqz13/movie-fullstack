
function MovieDetails({movie}) {
    const {title, poster } = movie;
    
    return (
        <div> 
            <h3>{title}</h3>
            
            { poster ? <img src={poster} alt={title} /> : <img src='https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg'
            alt="aosd" />}
        </div>
    )
}

export default MovieDetails;