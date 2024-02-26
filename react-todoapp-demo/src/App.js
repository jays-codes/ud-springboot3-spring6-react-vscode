import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <HWorldComponent></HWorldComponent>
      <ComponentTwo></ComponentTwo>
      <CompoThree/>
    </div>
  );
}

function HWorldComponent(){
  return (
    <div className="HworldCompo">HWORLD!!! WHOOOAAA!!!</div>
  )
}

function ComponentTwo(){
  return (
    <div className="Compo2">Component X</div>
  )
}

class CompoThree extends Component{
  render(){
    return (
      <div className="Compo3">Component 3</div>
    )  
  }
}

export default App;
