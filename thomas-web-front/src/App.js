import './App.css';

//chess icon
// import { GiChessKnight } from 'react-icons/gi';

import Home from './pages/home.js';
import Button from '@material-ui/core/Button';
import Hobbies from './pages/hobbies.js';

import { makeStyles } from '@material-ui/core/styles';

// Routing Elements
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

  navButton: {
    // padding: '5px',
    margin: '5px',
  },

}));


function App() {

  const classes = useStyles();

  return (
      <div className="content-back">
        <Router>

          {/* <Header/> */}

          {/* buttons for navigation */}


          <nav>
            <Button className={classes.navButton} variant='contained' color='primary' href='/'> Home </Button>
            <Button className={classes.navButton} variant='contained' color='primary' href='/hobby'> Hobbies </Button>
          </nav>

          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/hobby' component={Hobbies}></Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
