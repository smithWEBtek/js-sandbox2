import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Client from './Client';
import Server from './Server';

// Set up pages using the React Router Link element for navigation - instead of <a></a>
const App = () => (
  <div>
    <h1>React Router Example</h1>
    <Router>
      <ul>
        <li><Link to="/client">Client Side</Link></li>
        <li><Link to="/server">Server Side</Link></li>
      </ul>
      <Route path='/client' component={Client} />
      <Route path='/server' component={Server} />
    </Router>
  </div>
)

//Render app into the root HTML DOM node
ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));

export default App;
