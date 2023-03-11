import "./App.css";
import Projects from "./pages/projects";
import  Header from './components/header';
import HomePage from "./pages/home";
import Contact from "./pages/contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin, faReact, faSquareJs, faCss3Alt, faHtml5, faNode, faGitAlt, faNpm, faFigma, faBootstrap} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { createHashRouter, createRoutesFromElements, RouterProvider, Outlet, Route } from "react-router-dom";
library.add(faGithub, faLinkedin, faGlobe, faEnvelope, faReact, faSquareJs, faCss3Alt, faHtml5, faNode, faGitAlt, faNpm, faFigma, faBootstrap);

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}
const Root = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
export default App;

