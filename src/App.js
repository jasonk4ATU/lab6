import Header from './components/header'; //import content from a component
import Content from './components/content';
import Footer from './components/footer';
import Read from './components/read';
import Create from './components/create';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> {/*create navbar element*/}
      <div>
        <NavigationBar /> {/*create navbar element*/}
        <Routes>
          <Route path="/content" element={<Content />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} /> {/*display different content depending on navbar button clicked*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
