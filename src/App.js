import "./App.css";
import { getMoviesByName } from "./utils";

function App() {
  getMoviesByName("batman");
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
