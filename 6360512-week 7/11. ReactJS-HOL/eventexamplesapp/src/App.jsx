import { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    console.log('Hello! This is an increment event.');
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticClick = (e) => {
    alert('I was clicked');
    console.log(e); // Synthetic Event
  };

  return (
    <div className="App">
      <h1>React Event Examples</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to React Events!")}>Say Welcome</button>

      <br /><br />

      <button onClick={handleSyntheticClick}>Synthetic Event</button>

      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
