import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person= {
    name: "Dr. Mahfuz",
    job:"Singer"
  } 
  
  var person2= {
    name: "Eva Rahman",
    job:"Kokil konthi"
  }  
  var style={
    color: 'red',
    backgroundColor:'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <p>
          My first React paragraph
        </p>
      <h1 className="" style={style}>My heading: {person.name +" "+ person.job} </h1>
      <h3 style={{backgroundColor:'cyan', color:'darkblue'}}>Singer: {person2.name +" "+ person2.job} </h3>
      </header>
    </div>
  );
}

export default App;
