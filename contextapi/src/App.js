import { useContext } from "react";
import Counter from "./components/counter";
import { CounterContext } from "./context/counter";


function App() {
  const counterState=useContext(CounterContext);
  return (
    <div className="App">
      <h1>Context API</h1>
      <h3>Count is {counterState.count}</h3>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
