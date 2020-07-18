import React from 'react'
import ReactDOM from 'react-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';


// Set up pages using the React Router Link element for navigation - instead of <a></a>
const App = () => (
  <div>
    <Header />
    <NavBar />
  </div>
)

//Render app into the root HTML DOM node
ReactDOM.render((
  <App />
), document.getElementById('root'));

export default App;
