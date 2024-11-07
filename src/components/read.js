import React, { useState, useEffect } from 'react'; // Import React and hooks
import axios from 'axios'; // Import axios for making HTTP requests
import Movies from './movies'; // Import the Movies component to display the list of movies

const Read = () => { // Define the Read functional component
    // State variable to store the fetched movie data
    const [movieData, setMovies] = useState([]); // Initialize state with an empty array

    useEffect(() => {
        // Function to fetch movie data from the API
        const fetchMovies = () => {
            axios.get('http://localhost:4000/api/movies') // Make GET request to the API endpoint
                .then(response => {
                    setMovies(response.data.movies); // Update state with fetched movie data
                })
                .catch(error => {
                    console.error("Error fetching movie data:", error); // Log any error that occurs
                });
        };

        fetchMovies(); // Call the fetchMovies function when the component mounts

    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div> {/* Main container for the Read component */}
            <h1>Movie List</h1> {/* Display the heading for the movie list */}
            <Movies movies={movieData} /> {/* Pass movieData as props to the Movies component */}
        </div>
    );
};

export default Read; // Export the Read component so it can be used elsewhere in the app
