import React from 'react';  // Import React library
import MovieItem from './movieitem';  // Import the MovieItem component

const Movies = ({ movies }) => {  // Define the Movies component that accepts 'movies' as props
    return (
        <div>
            {movies.map(movie => (  // Iterate over the 'movies' array
                <MovieItem key={movie.imdbID} movie={movie} />  // Render a MovieItem for each movie, passing the movie data as props
            ))}
        </div>
    );
};

export default Movies;  // Export the Movies component for use in other parts of the application
