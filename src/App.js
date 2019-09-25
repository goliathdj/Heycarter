import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navmenu from './Components/Navbar/Navbar'
import Routes from './Components/Routes/Routes'

function App() {
  return (



    <div className="App">
<Navmenu></Navmenu>

 <Routes></Routes>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;

//https://github.com/jalbertsr/react-movies-app/blob/master/src/Services/dataService.js
//taskkill /f /im node.exe
