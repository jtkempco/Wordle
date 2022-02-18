import "./styles.css";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";

export default function App() {
  return (
    <div id="Wordle">
      <div id="board-container">
        <GameBoard />
      </div>
      <Keyboard />
    </div>
  );
}
