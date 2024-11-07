// Importing required modules
const express = require('express'); // Express framework for creating the server
const cors = require('cors'); // CORS (Cross-Origin Resource Sharing) for handling cross-origin requests
const bodyParser = require('body-parser'); // Middleware to parse request bodies, especially JSON

const app = express(); // Creating an instance of the Express app
const port = 4000; // Defining the port the server will listen on

// Middleware
app.use(cors()); // Enable CORS to allow requests from different origins
app.use(bodyParser.json()); // Use bodyParser to parse JSON data in the request body

// In-memory movie data array (acts as a simple database)
let movies = [
    {
        Title: "Avengers: Infinity War (server)", // Movie title
        Year: "2018", // Movie release year
        imdbID: "tt4154756", // IMDb ID for the movie
        Type: "movie", // Type of media (in this case, a movie)
        Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" // URL for the movie poster image
    },
    {
        Title: "Captain America: Civil War (server)",
        Year: "2016",
        imdbID: "tt3498820",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
        Title: "World War Z (server)",
        Year: "2013",
        imdbID: "tt0816711",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
];

// GET endpoint to fetch the list of movies
app.get('/api/movies', (req, res) => {
  // Responds with the movies array in JSON format
  res.json({ movies });
});

// POST endpoint to add a new movie
app.post('/api/movies', (req, res) => {
  const newMovie = req.body; // Get the movie data from the request body

  // Validate if the required fields are present in the new movie data
  if (!newMovie.Title || !newMovie.Year || !newMovie.Poster) {
    return res.status(400).json({ message: 'All fields (Title, Year, Poster) are required.' }); // Respond with error if missing fields
  }

  // Add the new movie to the in-memory movies array
  movies.push(newMovie);

  // Respond with a success message and the added movie data
  res.status(201).json({ message: 'Movie added successfully!', movie: newMovie });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log a message when the server is started
});
