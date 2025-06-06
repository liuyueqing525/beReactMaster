import React, { useState } from "react";
// import ReactDOM from'react-dom/client';
import "./App.css";
import Hello from "./hello";

// const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  
  
  class Count extends React.Component {
    state = { num: 0 };
    render() {
      let { num } = this.state;
      return (
        <div>
          {num}
          <button onClick={()=>{
            num++;
            this.setState({num}) 
          }}>递加</button>
        </div>
      );
    }
  } 
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello, React!</h1> */}
        <Hello />
        <Count />
        {/* <div>{arr}</div> */}
        
      </header>
    </div>
  );
}

export default App;
