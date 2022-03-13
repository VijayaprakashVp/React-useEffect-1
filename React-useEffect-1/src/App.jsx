import { useState } from "react";
import "./App.css";
import { Grocery } from "./components/Grocery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Grocery />
    </div>
  );
}

export default App;
