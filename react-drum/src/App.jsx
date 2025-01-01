import { useState } from "react";
import "./App.css";
import Drum from "./components/Drum";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Drum />
    </>
  );
}

export default App;
