import "./App.css";
import Projects from "./components/projects";
import {HomePage, Contact, Header} from './components'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
library.add(faGithub, faLinkedin, faGlobe, faEnvelope);

function App() {
  return (
      <BrowserRouter>
      <Header />
        {/* On this app we are using react router dom */}
        <Routes>
          <Route exact path="/React-Portfolio/" element={<HomePage />} />
          <Route  path="/projects" element={<Projects />} />
          <Route  path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

//about projects needs bottom padding
//contact links needs to be added
//email alert
//modals needs to be finished
//pdf curriculum
//try to add animations in a future xd
//projects btn doesnt work on phone devices
