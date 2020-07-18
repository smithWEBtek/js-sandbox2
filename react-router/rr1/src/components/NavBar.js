import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './NavBar.css';
import Home from '../views/Home';
import About from '../views/About';
import Client from '../views/Client';
import Server from '../views/Server';

const Navbar = () => {
  return (
    <div>
      <Router>
        <Link to='/home'>
          <button>Home</button>
        </Link>
        <Link to='/About'>
          <button>About</button>
        </Link>
        <Link to='/client'>
          <button>Client</button>
        </Link>
        <Link to='/server'>
          <button>Server</button>
        </Link>
        <hr />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/client' component={Client} />
        <Route path='/server' component={Server} />
      </Router>
    </div>
  )
}

export default Navbar;
