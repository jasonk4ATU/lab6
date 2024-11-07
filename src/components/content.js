import React from 'react'; // import library
import Header from './header'; // import Header component
import Footer from './footer'; // import Footer component

const Content = () => { // arrow function to create content component
  return (
    <div>
      <Header /> {/* Include Header component here */}
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2> {/* get local time and display */}
      <Footer /> {/* Footer component */}
    </div>
  );
}

export default Content; // send off content to be displayed in App.js
