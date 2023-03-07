import "./App.css";
import Header from "./components/header";
import Home from "./components/Home";
import Projects from "./components/projects";
import Contact from "./components/contact";
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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
