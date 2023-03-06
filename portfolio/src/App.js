import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Projects from './components/projects';
import Contact from './components/contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
library.add(faGithub, faLinkedin)

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      {/* On this app we are using react router dom */}
        <Routes>
          <Route exact path="/" element={ <Home />}></Route>
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
