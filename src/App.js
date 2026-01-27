import Home from './components/Home';
import Header from './components/header';
import Footer from './components/footer';


import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
