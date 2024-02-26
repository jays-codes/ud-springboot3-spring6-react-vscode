import './App.css';

import HWorldComponent from './components/testComponents/testComponent1'
import {ComponentTwo} from './components/testComponents/testComponent1'
import CompoThree from './components/testComponents/Component3'
import TestJS1 from './components/testComponents/testjs'


function App() {
  return (
    <div className="App">
      <HWorldComponent></HWorldComponent>
      <ComponentTwo></ComponentTwo>
      <CompoThree/>
      <TestJS1></TestJS1>
    </div>
  );
}

export default App;
