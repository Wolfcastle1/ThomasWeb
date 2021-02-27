import './App.css';

//chess icon
import { GiChessKnight } from 'react-icons/gi'

import Home from './pages/home.js'

// Routing Elements
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    <div>
      <header className="myApp-header">
        <h3>Thomas Web</h3>
        <GiChessKnight />


      </header>

      <div className="content-back">
        <Router>

          {/* buttons for navigation */}

          <Switch>
            <Route exact path='/' component={Home}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
