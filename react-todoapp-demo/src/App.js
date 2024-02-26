import './App.css';
import Counter from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter property={5}/>
      <Counter property={10}/>
      <PropsDemo property1="val1" property2="val2"/>
    </div>
  );
}

function PropsDemo(properties){
  console.log(properties)

  return (
    <div>Props</div>
  )
}

export default App;
