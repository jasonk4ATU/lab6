import React, { useEffect } from 'react';  // Import React and useEffect hook
import { Card, Button } from 'react-bootstrap';  // Import Card and Button components from React Bootstrap

const MovieItem = ({ movie }) => {  // Define the MovieItem component that accepts a 'movie' object as a prop

    // useEffect to log movie details whenever the movie prop changes
    useEffect(() => {
        console.log("Movie Item:", movie);
    }, [movie]);  // Only run this effect when the movie prop changes

    return (
        <Card style={{ width: '18rem', marginBottom: '20px' }}>   {/* Bootstrap styling for movie and poster */}
            <Card.Img 
                variant="top" 
                src={movie.Poster}  // Display movie poster
            />
            <Card.Body>
                <Card.Title> 
                    {movie.Title} ({movie.Year})  {/* Show movie title and year */}
                </Card.Title>
                <Card.Text>
                    Type: {movie.Type}  {/* Show type (movie) */}
                </Card.Text>
                <Button 
                    href={`https://www.imdb.com/title/${movie.imdbID}/`}  // Link to the IMDB page for the movie
                    target="_blank"  // Open link in a new tab
                >
                    View on IMDB 
                </Button>
            </Card.Body>
        </Card>
    );
};

export default MovieItem;  // Export the MovieItem component for use in other parts of the application
