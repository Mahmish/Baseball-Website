import Home from './components/home';
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
          <Route path='/' element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
