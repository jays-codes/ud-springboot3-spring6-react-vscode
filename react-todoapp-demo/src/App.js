import './App.css';

import HWorldComponent from './components/testComponents/testComponent1'
import {ComponentTwo} from './components/testComponents/testComponent1'
import CompoThree from './components/testComponents/Component3'


function App() {
  return (
    <div className="App">
      <HWorldComponent></HWorldComponent>
      <ComponentTwo></ComponentTwo>
      <CompoThree/>
    </div>
  );
}

export default App;
