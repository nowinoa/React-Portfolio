import './App.css';
import Header from './components/header';
import Home from './components/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add( faTwitter, faFontAwesome)

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
