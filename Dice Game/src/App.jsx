import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGamestarted, setIsGameStarted] = useState(true);

  const handleToggle = () => {
    setIsGameStarted(!isGamestarted);
  };

  return (
    <>{isGamestarted ? <GamePlay /> : <StartGame toggle={handleToggle} />}</>
  );
}

export default App;
