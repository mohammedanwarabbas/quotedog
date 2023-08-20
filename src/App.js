import './App.css';
import Quote from './components/Quote'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RandomQuote from './components/RandomQuote'
import {
  //for deployment - BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="container">
      <ScrollToTop smooth color="#6f00ff" />
      <Router>
      <Navbar />
        <Routes>
          {/*calling Quote component which displays quotes using QuoteItems component*/}
          <Route path="/" element={<Quote />} />
          <Route path="/random-quote" element={<RandomQuote />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
