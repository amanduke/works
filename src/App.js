import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './components/pages/Resume';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/player-beyond' component={() => { 
          window.location.href = 'https://amanduke.github.io/playerbeyond/'; 
          return null;
          }}/>
          <Route path='/alexis-teaches-yoga' component={() => { 
          window.location.href = 'https://alexisteachesyoga.com/'; 
          return null;
          }}/>
          <Route path='/budget-tracker' component={() => { 
          window.location.href = 'https://blooming-stream-72118.herokuapp.com/'; 
          return null;
          }}/>
          <Route path='/javascript-quiz' component={() => { 
          window.location.href = 'https://amanduke.github.io/javascriptquiz/'; 
          return null;
          }}/>
          <Route path='/linkedin' component={() => { 
          window.location.href = 'https://www.linkedin.com/in/alexismanduke/'; 
          return null;
          }}/>
          <Route path='/github' component={() => { 
          window.location.href = 'https://github.com/amanduke'; 
          return null;
          }}/>
          <Route path='/contactme' component={() => { 
          window.location.href = 'https://www.linkedin.com/in/alexismanduke/detail/contact-info/'; 
          return null;
          }}/>
          <Route path='/resume' component={() => { 
          window.location.href = 'https://drive.google.com/file/d/1iDkgfjC5q8Q8t4VGbuEbV3Qz3ZZvGmAu/view?usp=sharing'; 
          return null;
          }}/>
             
        </Switch>
      </Router>
    </>
  );
}

export default App;
