import { useState } from "react"; // Importing useState hook from React to manage state
import axios from 'axios'; // Import axios for making HTTP requests

function Create() {
  // State variables for movie details
  const [title, setTitle] = useState(''); // State for the movie title
  const [year, setYear] = useState(''); // State for the movie year
  const [poster, setPoster] = useState(''); // State for the movie poster URL

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)

    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`); // Log form data for debugging

    // Create a movie object to be sent in the POST request
    const movie = {
      Title: title,
      Year: year,
      Poster: poster
    };

    // Make a POST request to the server to add a new movie
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data)) // Log the response from the server if successful
      .catch((err) => console.error("Error:", err)); // Log any errors if the request fails
  };

  return (
    <div>
      <h2>This is my Create Component.</h2> {/* Header */}
      <form onSubmit={handleSubmit}> {/* Form that triggers handleSubmit when submitted */}
        {/* Title input field */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title} // Bind the title input to the state variable 'title'
            onChange={(e) => setTitle(e.target.value)} // Update the title state on change
          />
        </div>

        {/* Year input field */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="text"
            className="form-control"
            value={year} // Bind the year input to the state variable 'year'
            onChange={(e) => setYear(e.target.value)} // Update the year state on change
          />
        </div>

        {/* Poster URL input field */}
        <div className="form-group">
          <label>Add Movie Poster URL: </label>
          <input
            type="text"
            className="form-control"
            value={poster} // Bind the poster URL input to the state variable 'poster'
            onChange={(e) => setPoster(e.target.value)} // Update the poster state on change
          />
        </div>

        {/* Submit button for the form */}
        <input type="submit" value="Add Movie" /> 
      </form>
    </div>
  );
}

export default Create; // Export the Create component for use in other parts of the app
